const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const bookSchema=new Schema({

	name: {
		type:String,
		required:true
	},
	author: {
		type:String,
		required:true
	},
	description: {
		type:String,
		required:true
	},
	publisher: {
		type:String,
		required:true
	},
	Url:{
		type:String,
		required:true
	},
	creator:{
		type:Schema.Types.ObjectId,
		ref:'User'
	}
	//date:{
	//	type:String,
	//	required:true
	//}



},{timestamps:true});

module.exports=mongoose.model('Book',bookSchema);