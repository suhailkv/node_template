const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const asyncHandler = require('../lib/asyncHandler')
const CONSTANTS = require('../constants')

router.post(CONSTANTS.LOGIN_ROUTE, asyncHandler(authController.login));
router.post(CONSTANTS.CONFIRM_OTP, asyncHandler(authController.confirmOtp));

module.exports = router;
