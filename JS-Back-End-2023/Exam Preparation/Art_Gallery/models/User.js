const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'Username must be at least 4 characters'],
    },
    password: {
        type: String,
        required: true,
        minLength: [2, 'Password must be at least 3 characters long']
    },
    address: {
        type: String,
        required: true,
        maxlength: [20, 'Address must be a maximum of 20 characters long']
    },
    'my-publications': [{
        type: mongoose.Types.ObjectId,
        ref: 'Publication'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = { User };