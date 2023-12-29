const express = require('express');
const snaglist = require("../controller/snaglist");
const router = express.Router();

router.post('/snaglist', snaglist.addSnaglist);
router.get('/snaglist', snaglist.getAllSnaglist);

module.exports = router;
