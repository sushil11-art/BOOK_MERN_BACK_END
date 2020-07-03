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
	}
	//date:{
	//	type:String,
	//	required:true
	//}



},{timestamps:true});

module.exports=mongoose.model('Book',bookSchema);