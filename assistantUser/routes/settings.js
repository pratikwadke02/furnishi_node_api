const express = require('express');
const settings = require("../controller/settings");
const router = express.Router();

router.get('/setting', settings.settings);
router.put('/colors', settings.colors);
router.put('/fontSize', settings.fontSize);
router.put('/notification', settings.notification);

module.exports = router;
