const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[A-Z]+@[A-Z]+\.[A-Z]+$/gi.test(value),
            message: 'The email must contain only English letters!',
        }
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        minLength: [1, 'First name must be at least 1 characters long!']
    },
    lastName: {
        type: String,
        required: true,
        minLength: [1, 'Last name must be at least 1 characters long!']

    },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };