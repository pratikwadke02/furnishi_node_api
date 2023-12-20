const express = require('express');
const status = require("../controller/status");
const router = express.Router();

//status action
router.post('/statusAction', status.addStatusAction);
router.get('/statusAction', status.getAllStatusAction);

//status
router.post('/status', status.addStatus);
router.get('/status', status.getAllStatus);

module.exports = router;
