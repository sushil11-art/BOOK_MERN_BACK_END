const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const bookRoutes=require('./routes/book');
const cors=require('cors');
const app=express();

app.use(bodyParser.json());
//app.use(cors());

app.use((req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods','GET,PUT,PATCH,DELETE,POST');
	res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
	next();

});


app.use('/feed',bookRoutes);
app.use((error,req,res,next)=>{
	console.log(error);

	//data retrive when validation error is not empty
	const status=error.statusCode || 500;
	const message=error.message;

	const data=error.data;
	res.status(status).json({message:message,data:data});

});


mongoose.connect('mongodb+srv://Sushil:sushil11@cluster0-ongpn.mongodb.net/bookstore?retryWrites=true&w=majority')
.then(result=>{
	app.listen(4000);
}).catch(err=>{
	console.log(err);
});


