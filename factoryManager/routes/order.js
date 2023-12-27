const express = require('express');
const order = require("../controller/order");
const router = express.Router();

router.post('/order', order.addorder);
router.get('/order', order.getAllorder);

module.exports = router;
