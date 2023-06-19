const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        minLength: [10, 'The email should be at least 10 character long']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };