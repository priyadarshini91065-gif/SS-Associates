const express = require("express");

const router = express.Router();

const {
    submitEnquiry
} = require("../controllers/enquiryController");

router.post("/plan-with-us", submitEnquiry);

module.exports = router;