const express = require('express');
const cordinatorType = require("../controller/cordinatorType");
const router = express.Router();

router.post('/cordinatorType', cordinatorType.addCordinatorType);
router.get('/cordinatorType', cordinatorType.getAllCordinatorType);

module.exports = router;
