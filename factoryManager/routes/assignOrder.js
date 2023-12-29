const express = require('express');
const order = require("../controller/order");
const router = express.Router();

router.post('/assignOrder', order.assignOrder);

module.exports = router;
