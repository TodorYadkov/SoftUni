const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, 'Title must be at least 4 characters long'],
    },
    description: {
        type: String,
        required: true,
        minLength: [20, 'Description must be at least 20 characters long'],
        maxLength: [50, 'Description must be a maximum of 50 characters long']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'Image URL must start with http:// or https://'
        }
    },
    duration: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    usersEnrolled: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = { Course };