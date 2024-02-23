const express = require('express');
const settings = require("../controller/settings");
const router = express.Router();

router.get('/settings', settings.getSettings);

module.exports = router;
