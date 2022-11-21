const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Kavyarajsb2000:kavya2000@cluster0.hlvfkab.mongodb.net/LibraryApp?retryWrites=true&w=majority',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } );

const Schema = mongoose.Schema;

const BookSchema = new Schema({

    title: String,
    pageCount: String,
    publishedDate : String,
    image : String,
    about : String,
    language :String,
    author : String,
    categories : String


});

var BookData = mongoose.model('book',BookSchema);

module.exports = BookData;