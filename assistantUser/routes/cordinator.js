const express = require('express');
const cordinator = require("../controller/cordinator");
const router = express.Router();

router.get('/cordinator', cordinator.getAllCordinator);

module.exports = router;
