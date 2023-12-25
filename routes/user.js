const express = require('express');
const user = require("../controller/user");
const router = express.Router();

router.post('/signup', user.signup);
router.put('/login', user.login);

router.post('/sendOtp', user.userEmailLogin);
router.put('/verifyOtp', user.verifyOtp);

module.exports = router;
