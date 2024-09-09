const logger = require('../lib/logger').logger; 

function errorHandler(err, req, res, next) {
	if(!err) next()
	logger.error( `Error in ${req.method} ${req.originalUrl}` ,err);
	res.status(500).json({ result:false,error: 'Internal Server Error' });
}

module.exports = errorHandler;
