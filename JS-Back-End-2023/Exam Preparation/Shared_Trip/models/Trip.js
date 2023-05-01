const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    startPoint: {
        type: String,
        required: true,
        minLength: [4, 'Start point must be at least 4 characters long'],
    },
    endPoint: {
        type: String,
        required: true,
        minLength: [4, 'End point must be at least 4 characters long'],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    carImage: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'Car Image must starts with http:// or https://'
        }
    },
    carBrand: {
        type: String,
        required: true,
        minLength: [4, 'End point must be at least 4 characters long'],
    },
    seats: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'Price must be between 1 - 50'],
        max: [50, 'Price must be between 1 - 50'],
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description must be at least 10 characters long']
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    buddies: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = { Trip };