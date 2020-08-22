const express=require('express');
const router=express.Router();
const bookController=require('../controllers/book');

const {body}=require('express-validator/check')

//router.get('/books');
router.get('/books',bookController.getBooks);

router.post('/book',[body('name','You entered a too short name').trim().isLength({min:5,max:20})
	,body('author').trim().isLength({min:5,max:20}),
	body('description').trim().isLength({min:5,max:200}),
	body('publisher').trim().isLength({min:5,max:20})]
	,bookController.postBook);

router.get('/book:bookId',bookController.getBook);

router.put('/book:bookId',[body('name').trim().isLength({min:5,max:20})
	,body('author').trim().isLength({min:5,max:20}),
	body('description').trim().isLength({min:5,max:200}),
	body('publisher').trim().isLength({min:5,max:20})]
	,bookController.putBook);

router.delete('/book/:bookId',bookController.deleteBook);

module.exports=router;
