// Introduction to Mongoose

const mongoose = require('mongoose');

const main = async () =>
{
    await  mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
    const bookSchema = new mongoose.Schema({
         title:String,
         pages:Number
    });

    const bookModel = mongoose.model('books' , bookSchema)
    let data = new bookModel({title:"Zudionn" , pages:980});
    let result = await data.save();
    console.log(result);
}

main();


