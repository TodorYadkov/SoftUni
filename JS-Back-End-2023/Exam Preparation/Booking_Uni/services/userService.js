const { roundsBcrypt, jwtSecret } = require('../config/environment.js');
const { User } = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function userRegister(userInput) {
    const { email, username, password } = userInput;
    // Check if email is not used
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        throw new Error('Username or email is exist!');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, roundsBcrypt);

    // Create new user
    const user = await User.create({
        email,
        username,
        password: hashedPassword,
    });

    // Create token
    const token = jwt.sign({ _id: user._id, email, username }, jwtSecret, { expiresIn: '2d' });

    return token;
}

async function userLogin(userInput) {
    const { email, password } = userInput;
    // Check if the user exist
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid username or password!');
    }

    // Check if the password match
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
        throw new Error('Invalid username or password!');
    }

    // Create token
    const token = jwt.sign({ _id: user._id, username: user.username, email }, jwtSecret, { expiresIn: '2d' });
    
    return token;
}

module.exports = {
    userRegister,
    userLogin,
};