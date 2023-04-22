const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'The username should be at least 5 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [10, 'The email should be at least 10 character long']
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };