const express = require('express');
const location = require("../controller/location");
const router = express.Router();

router.get('/location', location.getLocation);

module.exports = router;
