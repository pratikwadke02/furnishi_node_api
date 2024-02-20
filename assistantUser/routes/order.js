const express = require('express');
const order = require("../controller/order");
const router = express.Router();

router.get('/order', order.getOrder);

module.exports = router;
