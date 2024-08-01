const logger = require('../utils/lib/logger').logger; 

function errorHandler(err, req, res, next) {
	logger.error( `Error in ${req.method} ${req.originalUrl}` ,err);
	res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;
