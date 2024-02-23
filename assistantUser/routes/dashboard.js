const express = require('express');
const order = require("../controller/order");
const router = express.Router();

router.get('/assignedOrderCount', order.getAssignedOrdersCount);

module.exports = router;
