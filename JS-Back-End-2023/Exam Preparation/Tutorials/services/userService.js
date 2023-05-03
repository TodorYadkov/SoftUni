const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { bcryptRounds, jwtSecret } = require('../config/environment');

async function userRegister(userInput) {
    const { username, password } = userInput;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        throw new Error(`${username} is already taken`);
    }

    const hashedPass = await bcrypt.hash(password, bcryptRounds);
    const newUser = await User.create({ username, password: hashedPass });
    const userToken = jwt.sign({ username, _id: newUser._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

async function userLogin(userInput) {
    const { username, password } = userInput;
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid username or password');
    }

    const matchPass = await bcrypt.compare(password, user.password);
    if (matchPass === false) {
        throw new Error('Invalid username or password');
    }

    return jwt.sign({ username, _id: user._id }, jwtSecret, { expiresIn: '2d' });
}

module.exports = {
    userRegister,
    userLogin,
};