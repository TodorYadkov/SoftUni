const bcrypt = require('bcrypt');
const { roundsBcrypt, jwtSecret } = require('../config/environment.js');
const { User } = require('../models/User.js');
const jwt = require('jsonwebtoken');

async function userRegister(userInput) {
    const { firstName, lastName, email, password } = userInput;
    // Check if the username is already taken
    const isExisting = await User.findOne({ email });
    if (isExisting) {
        throw new Error('Email is already used!');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, roundsBcrypt);

    // Create and save new user
    const user = await User.create({ firstName, lastName, email, password: hashedPassword });

    // Create token
    const token = jwt.sign({ _id: user._id, firstName, lastName, email }, jwtSecret, { expiresIn: '2d' });

    return token;
}

async function userLogin(userInput) {
    const { email, password } = userInput;
    // Check if the user exist
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Incorrect Email or Password!');
    }

    // Validate password
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
        throw new Error('Incorrect Email or Password!');
    }

    // Create token
    const token = jwt.sign({ _id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email }, jwtSecret, { expiresIn: '2d' });

    return token;
}

module.exports = {
    userRegister,
    userLogin,
};