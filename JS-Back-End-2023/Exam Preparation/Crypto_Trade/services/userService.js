const { User } = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { roundcBcrypt, jwtSecret } = require('../config/environment.js');

async function userRegister(userInput) {
    const { username, email, password } = userInput;
    // Check if email exist
    const existEmail = await User.findOne({ email });
    if (existEmail) {
        throw new Error(`${email} is already taken!`);
    }

    // Hash password
    const hashedPass = await bcrypt.hash(password, roundcBcrypt);

    const newUser = await User.create({ username, email, password: hashedPass });

    // Create user token
    const userToken = jwt.sign({ username, email, _id: newUser._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;
}

async function userLogin(userInput) {
    const { email, password } = userInput;

    // Check if the user exist
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Inavlid email or password');
    }

    // Check password
    const matchPass = await bcrypt.compare(password, user.password);
    if (matchPass === false) {
        throw new Error('Invalid email or password');
    }

    // Create user token
    const userToken = jwt.sign({ username: user.username, email: user.email, _id: user._id }, jwtSecret, { expiresIn: '2d' });

    return userToken;

}

module.exports = {
    userRegister,
    userLogin,
};