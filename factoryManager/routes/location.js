const express = require('express');
const location = require("../controller/location");
const router = express.Router();

router.post('/location', location.addLocation);
router.get('/location', location.getAllLocation);

module.exports = router;