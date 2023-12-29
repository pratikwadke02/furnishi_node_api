const express = require('express');
const orderlist = require("../controller/orderlist");
const router = express.Router();

router.post('/orderlist', orderlist.addOrderlist);
router.get('/orderlist', orderlist.getAllOrderlist);

module.exports = router;
