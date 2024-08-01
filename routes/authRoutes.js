const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const asyncHandler = require('../utils/lib/asyncHandler')
const CONSTANTS = require('../constants')

router.post(CONSTANTS.LOGIN_ROUTE, asyncHandler(authController.login));

module.exports = router;
