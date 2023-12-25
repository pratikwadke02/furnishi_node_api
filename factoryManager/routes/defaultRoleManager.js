const express = require('express');
const role = require("../controller/defaultRoleManager");
const router = express.Router();

router.post('/role', role.addDefaultRole);
router.get('/role', role.getAllDefaultRoles);


module.exports = router;