const express = require('express')
const router = express.Router();
const history = require('../controller/history')

router.get('/orderHistory', history.getOrderHistroy);
router.get('/snaglistHistory', history.getSnaglistHistory);

module.exports = router;