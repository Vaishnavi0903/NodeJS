// CRUD Operations with Mongoose

// There is no difference between Read and Find

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/bookstore");

const bookSchema = new mongoose.Schema({
    title: String,
    pages: Number,
    Author: String
});

const saveInDB = async () => {
    const bookModel = mongoose.model('books', bookSchema)
    let data = new bookModel({
        title: "Zudionn", pages: 980, Author: "xyz"
    });

    let result = await data.save();
    console.log(result);
}

const updateInDB = async () => {
    const bookModel = mongoose.model('books', bookSchema);
    let data = await bookModel.updateOne(
        {title:"Name of the Wind"} , {$set: {pages: 1000}}
    )
}
const deleteInDB = async () => {
    const bookModel = mongoose.model('books', bookSchema);
    let data = await bookModel.deleteMany({title:"Zudionn"})
}

const findInDB = async () => {
    const bookModel = mongoose.model('books', bookSchema);
    let data = await bookModel.find ({title:"Atomic Habits"})
    console.log(data);
}

//saveInDB();
//updateInDB();
//deleteInDB();
findInDB();