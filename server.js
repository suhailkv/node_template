const app = require('./app'); 
const logger = require('./lib/logger').logger; 

const server = app.listen(app.get('port'), () => {
	logger.info(`Server started on port ${app.get('port')}`);
});

process.on('SIGTERM', () => {
	logger.info('SIGTERM signal received: closing HTTP server');
	server.close(() => {
		logger.info('HTTP server closed');
	});
});

