const express = require('express');
const setting = require("../controller/setting");
const router = express.Router();

router.put('/factoryName', setting.factoryName);
router.put('/logo', setting.logo);
router.put('/colors', setting.colors);
router.put('/fontSize', setting.fontSize);
router.put('/notification', setting.notification);
router.get('/setting', setting.setting);

module.exports = router;
