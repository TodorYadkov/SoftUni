const bcrypt = require('bcrypt');
const { roundsBcrypt, jwtSecret } = require('../config/environment.js');
const { User } = require('../models/User.js');
const jwt = require('jsonwebtoken');

async function userRegister(userInput) {
    const { username, password, address } = userInput;
    // Check if the username is already taken
    const isExisting = await User.findOne({ username });
    if (isExisting) {
        throw new Error('Username is already used!');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, roundsBcrypt);

    // Create and save new user
    const user = await User.create({
        username,
        address,
        password: hashedPassword,
    });

    // Create token
    const token = jwt.sign({ _id: user._id, username: user.username, }, jwtSecret, { expiresIn: '2d' });

    return token;
}

async function userLogin(userInput) {
    const { username, password } = userInput;
    // Check if the user exist
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Incorrect Username or Password!');
    }

    // Validate password
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
        throw new Error('Incorrect Username or Password!');
    }

    // Create token
    const token = jwt.sign({ _id: user._id, username: user.username, }, jwtSecret, { expiresIn: '2d' });

    return token;
}

module.exports = {
    userRegister,
    userLogin,
};