const express = require('express');
const cordinator = require("../controller/cordinator");
const router = express.Router();

router.post('/cordinator', cordinator.addCordinator);
router.get('/cordinator', cordinator.getAllCordinator);

module.exports = router;
