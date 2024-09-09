const crypto = require('crypto');

function generateOTP(length = 6) { 

  const buffer = crypto.randomBytes(Math.ceil(length / 2)); 
  const hexString = buffer.toString('hex').slice(0, length);
  const otp = parseInt(hexString, 16) % Math.pow(10, length);
  return otp.length == length ? otp :generateOTP(length); 
}

module.exports = { generateOTP }