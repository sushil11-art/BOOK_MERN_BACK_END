const path=require('path');
const Book=require('../models/book');

const {validationResult}=require('express-validator/check');


exports.postBook=(req,res,next)=>{

console.log(req.body);

const errors=validationResult(req);
	if(!errors.isEmpty()){
		const error=new Error('Validation failed');
		error.statusCode=422;
		//res.status(422).json({message:'validation failed',errors:erros.array()})
		throw error;
		}

const {name,author,description,publisher}=req.body;
const selectedFile=req.file;
const Url=selectedFile.path;

const book=new Book({name:name,
	author:author,
	description:description,
	publisher:publisher,
	Url:Url});
//console.log(book.name);
	book.save().then(result=>{
		console.log(result);
		res.status(201).json({
			message:'Book added Successfully',
			book:book
		});
	}).catch(err=>{
		console.log(err);
		if(!err.statusCode){
			err.statusCode=500;
			next(err);
		}
	});

};

exports.getBooks=(req,res,next)=>{
	Book.find()
	.then(books=>{
		console.log(books);
		res.status(200).json({message:"Book fetched Successfully",books:books});
	})
	.catch(err=>{
		console.log(err);
		if(!err.statusCode){
			err.statusCode=500;
			next(err);
		}
	});

};

exports.getBook=(req,res,next)=>{
	const bookId=req.params.bookId;
	Book.findById(bookId).then(book=>{
		if(!book){
			const error=new Error('Could not find a book');
			error.statusCode=404;
			throw error;
		}

		res.status(200).json({message:"Book find Successfully",book:book});
	}).catch(err=>{
		console.log(err);
		if(!err.statusCode){

			err.statusCode=500;
			next(err);
		}
	});
};


exports.putBook=(req,res,next)=>{
	const bookId=req.params.bookId;


	const errors=validationResult(req);
	if(!errors.isEmpty()){
		const error=new Error('Validation failed');
		error.statusCode=422;
		//res.status(422).json({message:'validation failed',errors:erros.array()})
		throw error;
		}

	const {name,author,description,publisher}=req.body;

	const selectedFile=req.file;
	const Url=selectedFile.path

	Book.findById(bookId).then(book=>{
		if(!book){
			const error=new Error('Could not found a book');
			error.statusCode=404;
			throw error;
		}
		book.name=name;
		book.author=author;
		book.description=description;
		book.publisher=publisher;
		book.Url=Url;
		return book.save();
	}).then(result=>{
		res.status(201).json({message:"Post Updated Successfully",book:result})
	}).catch(err=>{
		console.log(err);
		if(!err.statusCode){

			err.statusCode=500;
			next(err);
		}
	});

};

exports.deleteBook=(req,res,next)=>{
	const bookId=req.params.bookId;
	Book.findByIdAndDelete(bookId).then(result=>{
		res.status(200).json({message:"Book deleted Successfully",book:result})
	}).catch(err=>{
		console.log(err);
		if(!err.statusCode){

			err.statusCode=500;
			next(err);
		}
	});

};