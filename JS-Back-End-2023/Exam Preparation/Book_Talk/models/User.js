const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, 'The username should be at least 4 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [10, 'The email should be at least 10 characters long'],
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };