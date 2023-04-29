const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[A-Z]+@[A-Z]+\.[A-Z]+$/gi.test(value),
            message: 'Only English letters are allowed for any of the parts of the email'
        }
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: [40, 'The description of skills should be a maximum of 40 characters long']
    },
    myAds: [{
        type: mongoose.Types.ObjectId,
        ref: 'Ad',
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = { User };