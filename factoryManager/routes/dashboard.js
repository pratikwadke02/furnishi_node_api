const express = require('express');
const order = require("../controller/order");
const enquiry = require('../controller/enquiry');
const orderlist = require("../controller/orderlist");
const router = express.Router();

router.get('/orderCount', order.getOrdersCount);
router.get('/enquiryCount', enquiry.getEnquiryCount);
router.get('/orderlistCount', orderlist.getOrderlistCount);

module.exports = router;
