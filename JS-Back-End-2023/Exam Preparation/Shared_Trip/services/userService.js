const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { bcryptRounds, jwtSecret } = require('../config/environment');

async function userRegister(userInput) {
    const { email, password, gender } = userInput;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        throw new Error('Email is already taken');
    }

    const hashedPass = await bcrypt.hash(password, bcryptRounds);
    const newUser = await User.create({ email, gender, password: hashedPass });
    const userToken = jwt.sign({ email, gender, _id: newUser._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

async function userLogin(userInput) {
    const { email, password } = userInput;
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }

    const matchPass = await bcrypt.compare(password, user.password);
    if (matchPass == false) {
        throw new Error('Invalid email or password');
    }

    const userToken = jwt.sign({ email, gender: user.gender, _id: user._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

module.exports = {
    userRegister,
    userLogin,
};