const express = require('express');
const access = require("../controller/access");
const router = express.Router();

router.get('/access', access.getAccess);

module.exports = router;
