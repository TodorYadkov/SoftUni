const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Name must be at least 2 characters long'],
    },
    years: {
        type: Number,
        required: [true, 'The years is required'],
        min: [1, 'The years must be a number between 1 and  100'],
        max: [100, 'The years must be a number between 1 and  100'],
    },
    kind: {
        type: String,
        required: [true, 'Kind is required'],
        minLength: [3, 'Kind must be at least 3 characters long'],
    },
    imageUrl: {
        type: String,
        required: [true, 'The photo image URL is required'],
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'The photo image URL must start with http:// or https://'
        }
    },
    need: {
        type: String,
        required: [true, 'The need is required'],
        minLength: [3, 'The need must be at least 3 characters long'],
        maxLength: [20, 'The need must be a maximum of 20 characters long']
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        minLength: [5, 'Location must be at least 5 characters long'],
        maxLength: [15, 'Location must be a maximum of 15 characters long']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [5, 'Description must be at least 5 characters long'],
        maxLength: [50, 'Description must be a maximum of 50 characters long']
    },
    donations: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = { Animal };