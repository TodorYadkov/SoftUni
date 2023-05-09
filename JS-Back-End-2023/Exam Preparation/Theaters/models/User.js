const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'The username must be at least 3 characters long'],
        collation: {
            locale: 'en',
            strength: 2,
        },
        match: [/^[a-z0-9]+$/gi, 'Username must contain only English letters and digits']
    },
    password: {
        type: String,
        required: true,
    },
    likedPlays: [{
        type: mongoose.Types.ObjectId,
        ref: 'Play'
    }],
    myPlays: [{
        type: mongoose.Types.ObjectId,
        ref: 'Play',
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = { User };