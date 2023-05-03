const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minLenght: [5, 'Username must be at least 5 characters long'],
        collation: {
            locale: 'en',
            strength: 2,
        },
        match: [/^\w+$/gi, 'Username must contain only english letters and digits'],
    },
    password: {
        type: String,
        required: true,
    },
    enrolledCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course',
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = { User };