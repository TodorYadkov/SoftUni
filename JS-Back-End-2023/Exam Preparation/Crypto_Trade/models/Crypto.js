const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'The Name should be at least 2 characters'],
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'The Crypto Image should start with http:// or https://'
        }
    },
    price: {
        type: Number,
        reuired: true,
        validate: {
            validator: (value) => value > 0,
            message: 'The Price should be a positive number'
        }
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'The Description should be a minimum of 10 characters long']
    },
    payment: {
        type: String,
        reuired: true,
        enum: {
            values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
            message: 'The Payment Method must be one of the options'
        },
    },
    cryptoBuyer: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = { Crypto };