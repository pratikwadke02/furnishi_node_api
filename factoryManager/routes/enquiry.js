const express = require('express');
const enquiry = require("../controller/enquiry");
const router = express.Router();

router.post('/enquiry', enquiry.addEnquiry);
router.get('/enquiry', enquiry.getAllEnquiry);

module.exports = router;
