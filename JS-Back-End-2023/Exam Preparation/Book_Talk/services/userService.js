const { roundsBcrypt, jwtSecret } = require('../config/environment.js');
const { User } = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function userRegister(userInput) {
    const { username, email, password } = userInput;
    // Check that the current username is not already taken
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error(`${email} is already taken!`);
    }

    // Hash password
    const hashedPasswor = await bcrypt.hash(password, roundsBcrypt);

    // Create new user
    const newUser = await User.create({ email, username, password: hashedPasswor });

    // Create token to use in cookies
    const userToken = jwt.sign({ email, username, _id: newUser._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
};

async function userLogin(userInput) {
    const { email, password } = userInput;
    // Check if the user exist
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid username or password');
    }

    // Check password
    const matchPassowrd = await bcrypt.compare(password, user.password);
    if (matchPassowrd == false) {
        throw new Error('Invalid username or password');
    }

    // Create user token
    const userToken = jwt.sign({ email, username: user.username, _id: user._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

module.exports = {
    userRegister,
    userLogin,
};