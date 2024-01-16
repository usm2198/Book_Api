const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    srno: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('bookDetails', bookSchema);
