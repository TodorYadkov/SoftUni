const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [6, 'Title must be at least 6 characters long']
    },
    keyword: {
        type: String,
        required: true,
        minLength: [6, 'Keyword must be at least 6 characters long']
    },
    location: {
        type: String,
        required: true,
        maxLength: [15, 'Keyword must be a maximum of 15 characters long']
    },
    dateCreation: {
        type: String,
        required: true,
        minlength: [10, 'Name must be exactly 10 characters long'],
        maxlength: [10, 'Name must be exactly 10 characters long'],
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'Wildlife image URL must start with http:// or https://'
        }
    },
    description: {
        type: String,
        required: true,
        minLength: [8, 'Description must be at least 8 characters long']
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    votesOnPost: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    rating: {
        type: Number,
        required: true,
        default: 0,
    }
});


const Data = mongoose.model('Data', dataSchema);

module.exports = { Data };