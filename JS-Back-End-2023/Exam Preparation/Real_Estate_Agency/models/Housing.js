const mongoose = require('mongoose');

const housingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [6, 'Name must be at least 6 characters long'],
    },
    type: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value >= 1850 && value <= 2021,
            message: 'Year must be between 1850 and 2021',
        }
    },
    city: {
        type: String,
        required: true,
        minLength: [4, 'City must be at least 4 characters long']
    },
    imageHome: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'Home image must starts with http:// or https://'
        }
    },
    description: {
        type: String,
        required: true,
        maxLength: [60, 'Property description must be at maximum 60 characters long']
    },
    availablePieces: {
        type: Number,
        required: true,
        min: [0, 'Available Pieces should be positive number (from 0 to 10)'],
        max: [10, 'Available Pieces should be positive number (from 0 to 10)']
    },
    rentedHome: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Housing = mongoose.model('Housing', housingSchema);

module.exports = { Housing };