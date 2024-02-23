const express = require('express');
const profile = require("../controller/profile");
const router = express.Router();

router.put('/profile', profile.updateProfile);
router.get('/profile', profile.getProfile);

module.exports = router;
