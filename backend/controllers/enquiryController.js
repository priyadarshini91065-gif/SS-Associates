const supabase = require("../config/supabase");
const transporter = require("../config/email");
const axios = require("axios");

const submitEnquiry = async (req, res) => {
    try {
        const {
            full_name,
            email,
            phone,
            event_type,
            event_date,
            guest_count,
            budget_range,
            message
        } = req.body;

        const { data, error } = await supabase
            .from("plan_with_us")
            .insert([
                {
                    full_name,
                    email,
                    phone,
                    event_type,
                    event_date,
                    guest_count,
                    budget_range,
                    message,
                    status: "New"
                }
            ]);

        if (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        // Send Email
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: "New Enquiry Received - SS Associate",
                html: `
                    <h2>New Customer Enquiry</h2>

                    <p><b>Name:</b> ${full_name}</p>
                    <p><b>Email:</b> ${email}</p>
                    <p><b>Phone:</b> ${phone}</p>
                    <p><b>Event:</b> ${event_type}</p>
                    <p><b>Event Date:</b> ${event_date}</p>
                    <p><b>Guests:</b> ${guest_count}</p>
                    <p><b>Budget:</b> ${budget_range}</p>
                    <p><b>Message:</b> ${message}</p>
                `
            });
        } catch (emailError) {
            console.error("Email Error:", emailError.message);
        }

        // Send to Google Sheet
        try {
            await axios.post(process.env.GOOGLE_SCRIPT_URL, {
                full_name,
                email,
                phone,
                event_type,
                event_date,
                guest_count,
                budget_range,
                message
            });
        } catch (sheetError) {
            console.error("Google Sheet Error:", sheetError.message);
        }

        // Return Success
        return res.status(201).json({
            success: true,
            message: "Enquiry submitted successfully!",
            data
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

module.exports = {
    submitEnquiry
};