const express = require('express')
const router = express.Router();
const { body } = require('express-validator');
// const authController = require('../Controller/authController')

// router.post('/emailLogin', [
//     body('emailId').not().isEmpty().withMessage('Email is required'),
// ], authController.User_Email_Login);

module.exports = router;