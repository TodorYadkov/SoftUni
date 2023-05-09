const mongoose = require('mongoose');

const playSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: [50, 'Description must be a maximum 50 characters long']
    },
    imageUrl: {
        type: String,
        required: true,
    },
    isPublic: {
        type: Boolean,
        required: true,
        default: false
    },
    created: {
        type: Date,
        required: true,
        default: new Date(),
    },
    usersLiked: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Play = mongoose.model('Play', playSchema);

module.exports = { Play };