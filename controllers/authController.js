
const otpHandler = require('../services/otpHandler')
const validationHandler = require('../utils/validation') 
const cacheController = require('../lib/cacheHandler')
const jwthandler = require('../lib/jwtHandler')
const encryptionHandler = require('../lib/encryptionHandler')
const login = (req, res) => {
	if(!validateReq(req.body)) return res.json({result:false,message:'Check phone number'});
	// check user exists or not 


	const otp = otpHandler.generateOTP();
	console.log(otp);
	// send to the end user

	// use a persistant storage
	cacheController.set(req.body.phone,otp,60*3)
	res.json({result:true})

};
const confirmOtp = (req,res) => {
	if(!validationHandler.isValidOTPEntry(req.body.otp)) return res.json({result:false,message:'Invalid OTP'})
	// take stored otp and check 
	
	const {phone} = req.body
	const userOtp = req.body.otp 
	const storedOtp = cacheController.get(req.body.phone)
	console.log(userOtp,storedOtp);
	if(userOtp != storedOtp) return res.json({result:false,message:"Invalid OTP"});
	cacheController.del(phone);
	// create a jwt token
	const token = jwthandler.generateToken(encryptionHandler.encrypt(phone)) 
	res.json({result:true,token})

} 
const validateReq = (body) => {
    return body.phone && validationHandler.isValidIndianPhoneNumber(body.phone)
};

module.exports = { login ,confirmOtp}
