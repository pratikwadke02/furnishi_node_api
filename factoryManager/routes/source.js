const express = require('express');
const source = require("../controller/source");
const router = express.Router();

router.post('/source', source.addSource);
router.get('/source', source.getAllSource);

module.exports = router;
