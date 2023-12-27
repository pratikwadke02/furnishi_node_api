const express = require('express');
const order = require("../controller/order");
const enquiry = require('../controller/enquiry');
const router = express.Router();

router.get('/orderCount', order.getOrdersCount);
router.get('/enquiryCount', enquiry.getEnquiryCount);

module.exports = router;
