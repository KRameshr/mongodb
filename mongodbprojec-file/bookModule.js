const mongoose = require('mongoose');


const bookShema = mongoose.Schema({
    title : String,
    author : String,
    price : Number
});

module.exports  = mongoose.model('Book',bookShema);