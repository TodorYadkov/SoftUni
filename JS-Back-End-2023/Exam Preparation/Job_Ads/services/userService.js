const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { bcryptRounds, jwtSecret } = require('../config/environment');

async function userRegister(userInput) {
    const { email, password, description } = userInput;
    // Check if the email is not taken
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        throw new Error('Email is already taken');
    }

    // Hash password
    const hashedPass = await bcrypt.hash(password, bcryptRounds);

    // Create new User
    const newUser = await User.create({ email, description, password: hashedPass });

    // Create user token
    const userToken = jwt.sign({ email, description, _id: newUser._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

async function userLogin(userInput) {
    const { email, password } = userInput;
    // Chekc if user exist
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    // Check password
    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) {
        throw new Error('Invalid email or password');
    }
    // Create user token
    const userToken = jwt.sign({ email: user.email, description: user.description, _id: user._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

module.exports = {
    userRegister,
    userLogin,
};