const express = require('express');
const order = require("../controller/order");
const router = express.Router();

router.get('/getAssignedOrders', order.getAssignedOrders);
router.get('/order', order.getOrderDetails);
router.put('/order', order.updateOrder);

module.exports = router;
