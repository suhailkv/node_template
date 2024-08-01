const pino = require('pino');
const multistream = require('pino-multi-stream').multistream;
const fs = require('fs');

const streams = [
	{ stream: process.stdout }, 
	{ stream: fs.createWriteStream('logs/api.log',{ flags: 'a' }) },
];
const loggerOptions = {
	level: process.env.LOG_LEVEL || 'info',
	timestamp: pino.stdTimeFunctions.isoTime,
	redact: ['req.headers.authorization', 'res.headers'], 
	formatters: {
		level(label) {
		  	return { level: label };
		},
	}
}
const logger = pino(loggerOptions, multistream(streams));
const expressPino = require('express-pino-logger')({ logger });

module.exports = { logger,expressPino };
