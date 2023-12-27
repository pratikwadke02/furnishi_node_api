const express = require('express');
const order = require("../controller/order");
const router = express.Router();

router.post('/order', order.addOrder);
router.get('/order', order.getAllOrder);

module.exports = router;
