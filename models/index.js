// requires mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// exports the books AND requires the book
module.exports.Book = require('./book.js');

