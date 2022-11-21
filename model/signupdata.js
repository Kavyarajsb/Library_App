const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Kavyarajsb2000:kavya2000@cluster0.hlvfkab.mongodb.net/LibraryApp?retryWrites=true&w=majority',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } );

const Schema = mongoose.Schema;

const SignUpSchema = new Schema({

    Username: String,
    Password: String,
    Email : String
                
});

var SignUpData = mongoose.model('signup',SignUpSchema);

module.exports = SignUpData;