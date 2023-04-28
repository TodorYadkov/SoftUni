const { User } = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { bcryptRounds, jwtSecret } = require('../config/environment.js');

async function userRegister(userInput) {
    const { email, firstName, lastName, password } = userInput;
    // Check if the email is free
    const isEmailTaken = await User.findOne({ email });
    if (isEmailTaken) {
        throw new Error('Email is already taken');
    }
    // Hash user pass
    const hashedPass = await bcrypt.hash(password, bcryptRounds);
    // Create new user
    const newUser = await User.create({ email, firstName, lastName, password: hashedPass });
    // Create token
    const userToken = jwt.sign({ email, firstName, lastName, _id: newUser._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

async function userLogin(userInput) {
    const { email, password } = userInput;
    // Check if the name exist
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Inavild email or password');
    }

    // Check password
    const matchPassword = await bcrypt.compare(password, user.password);
    if (matchPassword == false) {
        throw new Error('Inavild email or password');
    }

    // Create token
    const userToken = jwt.sign({ email: user.email, firstName: user.firstName, lastName: user.lastName, _id: user._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

module.exports = {
    userRegister,
    userLogin,
};