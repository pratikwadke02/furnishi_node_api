const express = require('express');
const carcass = require("../controller/carcass");
const designer = require("../controller/designer");
const finalSiteSurveyor = require("../controller/finalSiteSurveyor");
const panel = require("../controller/panel");
const planner = require("../controller/planner");
const salesPerson = require("../controller/salesPerson");
const router = express.Router();

router.post('/carcass', carcass.addCarCass);
router.get('/carcass', carcass.getAllCarCass);

router.post('/designer', designer.addDesigner);
router.get('/designer', designer.getAllDesigner);

router.post('/finalSiteSurveyor', finalSiteSurveyor.addFinalSiteSurveyor);
router.get('/finalSiteSurveyor', finalSiteSurveyor.getAllFinalSiteSurveyor);

router.post('/panel', panel.addPanel);
router.get('/panel', panel.getAllPanel);

router.post('/planner', planner.addPlanner);
router.get('/planner', planner.getAllPlanner);

router.post('/salesPerson', salesPerson.addSalesPerson);
router.get('/salesPerson', salesPerson.getAllSalesPerson);

module.exports = router;