const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { bcryptRounds, jwtSecret } = require('../config/environment');

async function userRegister(userInput) {
    const { name, username, password } = userInput;
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
        throw new Error('Username is already taken');
    }

    const hashedPass = await bcrypt.hash(password, bcryptRounds);
    const newUser = await User.create({ name, username, password: hashedPass });
    const userToken = jwt.sign({ name, username, _id: newUser._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

async function userLogin(userInput) {
    const { username, password } = userInput;
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const matchPass = await bcrypt.compare(password, user.password);
    if (matchPass === false) {
        throw new Error('Incorrect username or password');
    }

    const userToken = jwt.sign({ name: user.name, username: user.username, _id: user._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

module.exports = {
    userRegister,
    userLogin,
};