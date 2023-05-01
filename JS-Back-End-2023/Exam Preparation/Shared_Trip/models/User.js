const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[A-Z]+@[A-Z]+\.[A-Z]+$/gi.test(value),
            message: 'The email entered is invalid'
        },
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    tripsHistory: [{
        type: mongoose.Types.ObjectId,
        ref: 'Trip'
    }]
});

userSchema.pre('save', function () {
    if (['male', 'female'].includes(this.gender) == false) {
        throw new Error('Gender is incorrect');
    }
    return this.gender = this.gender === 'male' ? 'Male' : 'Female';
});

const User = mongoose.model('User', userSchema);

module.exports = { User };