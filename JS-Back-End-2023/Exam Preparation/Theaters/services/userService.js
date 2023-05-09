const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { bcryptRounds, jwtSecret } = require('../config/enviroments');

async function userRegister(userInput) {
    const { username, password } = userInput;
    const userCheck = await User.findOne({ username });
    if (userCheck) {
        throw new Error(`${username} is already taken`);
    }

    const hashedPass = await bcrypt.hash(password, bcryptRounds);
    const newUser = await User.create({ username, password: hashedPass });

    return jwt.sign({ username, _id: newUser._id }, jwtSecret, { expiresIn: '2d' });
}

async function userLogin(userInput) {
    const { username, password } = userInput;
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid usrname or password');
    }

    const matchPass = await bcrypt.compare(password, user.password);
    if (matchPass === false) {
        throw new Error('Invalid usrname or password');
    }

    return jwt.sign({ username, _id: user._id }, jwtSecret, { expiresIn: '2d' });
}

module.exports = {
    userRegister,
    userLogin,
};