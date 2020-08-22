const bcrypt=require('bcryptjs');
const User=require('../models/user');

const {validationResult}=require('express-validator/check');


exports.signup=(req,res,next)=>{

	const errors=validationResult(req);
	if(!errors.isEmpty()){
		const error=new Error('Validation failed');
		error.statusCode=422;
		throw error;
	}
	const email=req.body.email;
	const name=req.body.name;
	const password=req.body.password;
	bcrypt.hash(password,12)
	.then(hashedPw=>{
		const user=User(email:email,name:name,password:hashedPw);
		return user.save();
	})
	.then(result=>{
		res.status(201).json({message:"User created successfully",userId:result._id});
	})
	.catch(err=>{
		console.log(err);
		if(!err.statusCode){
			errr.statusCode=500;
			next(err);
		}
	});

}