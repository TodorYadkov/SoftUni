const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/g.test(value),
            message: 'Invalid email address!'
        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [5, 'Password must be at least 5 characters long!'],
    },
    bookedHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel',
    }],
    userHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel',
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = { User };