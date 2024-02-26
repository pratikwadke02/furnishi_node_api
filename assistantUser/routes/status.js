const express = require('express');
const status = require("../controller/status");
const router = express.Router();

router.get('/status', status.getStatus);

module.exports = router;
