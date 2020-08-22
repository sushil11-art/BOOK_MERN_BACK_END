const express=require('express');

const {body}=require('express-validator/check');

const router=express.Router();
const User=require('../models/user');

//const authController=require('../controllers/auth');

//user registration route

router.post('/register-user');


router.post('register-admin');


module.exports=router;



/*
router.put('/signup',
	[body('email')
	.isEmail()
	.withMessage('Please enter a valid email')
	.custom((value,{req})=>{
		return User.findOne({email:value}).then(userDoc=>{
			if(userDoc){
				new Promise.reject('Email already exits');
			}
		})
	})
	.normalizeEmail(),
	body('password')
	.trim()
	.isLength({min:5})
	,body('name')
	.trim()
	.not()
	.isEmpty()
	.isLength({min:5})]
	,authController.signup);
*/