const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^[a-zA-Z]+ [a-zA-Z]+$/g.test(value),
            message: 'Name must be in the following format - "First Name" "Last Name"'
        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Username must be at least 5 characters long!']
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };