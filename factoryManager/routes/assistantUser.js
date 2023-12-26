const express = require('express');
const assistantUser = require("../controller/assistantUser");
const router = express.Router();

router.post('/assistantUser', assistantUser.addAssistantUser);
router.get('/assistantUser', assistantUser.getAllAssistantUser);

module.exports = router;
