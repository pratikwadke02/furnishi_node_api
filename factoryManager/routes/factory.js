const express = require('express');
const factory = require("../controller/factory");
const router = express.Router();

router.post('/factory', factory.addFactory);
router.get('/factory', factory.getAllFactory);

module.exports = router;
