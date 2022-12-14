const express = require('express');
const BookData = require('../model/bookdata');
let app = express.Router();

app.get('/api/books', function (req, res) {
    BookData.find()
        .then(function (book) {
            res.send(book);
        })
});

// app.get('/authors', function (req, res) {
//     AuthorData.find()
//         .then(function (author) {
//             res.send(author);

//         })
// });

app.get('/api/books/:_id', function (req, res) {
    let _id = req.params._id;
    BookData.findById(_id)
        .then(function (book) {
            res.send(book);
        });
});

// app.get('/authors/:_id', function (req, res) {
//     let _id = req.params._id;
//     AuthorData.findById(_id)
//         .then(function (author) {
//             res.send(author)
//         });
// });

module.exports = app;