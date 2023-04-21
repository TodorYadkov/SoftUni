const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [2, 'The Title should be at least 2 characters'],
    },
    author: {
        type: String,
        required: true,
        minLength: [5, 'The Author should be at least 5 characters']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'The Image URL should start with http:// or https://'
        }
    },
    review: {
        type: String,
        required: true,
        minLength: [10, 'The Review should be a minimum of 10 characters long']
    },
    genre: {
        type: String,
        required: true,
        minLength: [3, 'The Genre should be at least 3 characters']
    },
    stars: {
        type: Number,
        required: true,
        min: [1, 'The stars must be at least 1'],
        max: [5, 'The stars must not exceed 5'],
    },
    wishingList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = { Book };