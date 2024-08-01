const express = require('express');
const router = express.Router();
const CONSTANTS = require('../constants')
const authRoutes = require('./authRoutes');

// Register routes here
router.use(`${CONSTANTS.API_BASE_PATH}/auth`, authRoutes);

module.exports = router; 
