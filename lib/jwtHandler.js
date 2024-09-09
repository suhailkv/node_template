const jwt = require('jsonwebtoken');

function generateToken(payload, expiresIn = 3600) { 
  	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

function verifyToken(token) {
	try {
		return jwt.verify(token, JWT_SECRET);
	} catch (error) {
		return null; 
	}
}

module.exports = { generateToken, verifyToken };
