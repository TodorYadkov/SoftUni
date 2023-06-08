const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [2, 'The username should be at least 2 characters long'],
    },
    email: {
        type: String,
        required: true,
        minLength: [10, 'The email should be at least 10 character long'],
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };