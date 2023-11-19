const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:String,
    pages:Number,
    Author:String
});

 module.exports = mongoose.model('books' , bookSchema)