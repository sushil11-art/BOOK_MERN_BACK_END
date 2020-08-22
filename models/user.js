const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	role:{
		type:String,
		default:"user",
		enum:["user,admin"]
	}
	password:{
		type:String,
		required:true
	},
	book:[
		{	
		type:Schema.Types.ObjectId,
		ref:'Book'	
		}]
},{timestamsp:true});

module.exports=mongoose.model('User',userSchema); 