const express = require('express');
const snag = require("../controller/snag");
const router = express.Router();

//snag action
router.post('/snagAction', snag.addSnagAction);
router.get('/snagAction', snag.getAllSnagAction);

//snag cost
router.post('/snagCost', snag.addSnagCost);
router.get('/snagCost', snag.getAllSnagCost);

//snag issue
router.post('/snagIssue', snag.addSnagIssue);
router.get('/snagIssue', snag.getAllSnagIssue);

//snag solution
router.post('/snagSolution', snag.addSnagSolution);
router.get('/snagSolution', snag.getAllSnagSolution);

module.exports = router;
