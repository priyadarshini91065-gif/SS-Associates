const express = require("express");
const cors = require("cors");
require("dotenv").config();

const supabase = require("./config/supabase");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json());

// ===============================
// API Routes
// ===============================
app.use("/api", enquiryRoutes);

// ===============================
// Port
// ===============================
const PORT = process.env.PORT || 5000;

// ===============================
// Home Route
// ===============================
app.get("/", (req, res) => {
    res.send("SS Associates Backend is Running 🚀");
});

// ===============================
// Test Database Connection
// ===============================
app.get("/test-db", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("plan_with_us")
            .select("*")
            .limit(5);

        if (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            message: "✅ Supabase Connected Successfully!",
            data
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

// ===============================
// 404 Route
// ===============================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// ===============================
// Start Server
// ===============================
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});