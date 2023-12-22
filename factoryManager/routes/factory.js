const express = require('express');
const factory = require("../controller/factory");
const router = express.Router();

router.post('/factory', factory.addFactory);
router.get('/factory', factory.getAllFactory);

router.post('/factoryEngineer', factory.addFactoryEngineer);
router.get('/factoryEngineer', factory.getAllFactoryEngineer);

module.exports = router;
