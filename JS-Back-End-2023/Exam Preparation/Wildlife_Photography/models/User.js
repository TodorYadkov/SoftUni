const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, 'First name must be at least 3 characters long'],
        match: [/^[A-Za-z]*$/g, 'First name must contain only English letters'],
        collation: {
            locale: 'en',
            strength: 2,
        },
    },
    lastName: {
        type: String,
        required: true,
        minLength: [5, 'Last name must be at least 5 characters long'],
        match: [/^[A-Za-z]*$/g, 'Last name must contain only English letters'],
        collation: {
            locale: 'en',
            strength: 2,
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[a-z]+@[a-z]+\.[a-z]+$/gi.test(value),
            message: 'The email must contain only English characters and be in the following format: <name>@<domain>.<extension>'
        }
    },
    password: {
        type: String,
        required: true,
    },
    myPosts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Data'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = { User };