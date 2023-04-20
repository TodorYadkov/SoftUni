const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User.js');
const { roundsBcrypt, jwtSecret } = require('../config/environment.js');

async function userRegister(userInput) {
    const { username, email, password } = userInput;
    // Check if the user is taken
    const existingUser = await User.findOne({ username, email });
    if (existingUser) {
        throw new Error('Username is already in use!');
    }

    // Hash password
    const hashedPass = await bcrypt.hash(password, roundsBcrypt);

    // Create new User
    const newUser = await User.create({
        username,
        email,
        password: hashedPass
    });

    // Create token
    const userToken = jwt.sign({ _id: newUser._id, email, username }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

async function userLogin(userInput) {
    const { email, password } = userInput;

    // Check if the user exist
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Incorrect email or password');
    }

    // Check that the passwords match
    const matchingPassword = await bcrypt.compare(password, user.password);
    if (matchingPassword === false) {
        throw new Error('Incorrect email or password');
    }

    // Create token
    const userToken = jwt.sign({ _id: user._id, email: user.email, username: user.username }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

module.exports = {
    userRegister,
    userLogin,
};