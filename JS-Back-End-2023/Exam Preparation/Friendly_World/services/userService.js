const bcrypt = require('bcrypt');
const { roundsBcrypt, jwtSecret } = require('../config/environment.js');
const { User } = require('../models/User.js');
const jwt = require('jsonwebtoken');

async function userRegister(userInput) {
    const { email, password } = userInput;
    // Check if the email is already taken
    const isExisting = await User.findOne({ email });
    if (isExisting) {
        throw new Error('Email is already used!');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, roundsBcrypt);

    // Create and save new user
    const user = await User.create({
        email,
        password: hashedPassword
    });

    // Create token
    return generateToken(user);
}

async function userLogin(userInput) {
    const { email, password } = userInput;
    // Check if the user exist
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid username or password!');
    }

    // Validate password
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
        throw new Error('Invalid username or password!');
    }

    // Create token
    return generateToken(user);
}

async function generateToken(user) {
    try {
        const token = await new Promise((resolve, reject) => {
            jwt.sign({ _id: user._id, email: user.email },
                jwtSecret,
                { expiresIn: '2d' },
                (err, signedToken) => {
                    if (err) {
                        reject(new Error('The token could not be signed!'));
                    } else {
                        resolve(signedToken);
                    }
                }
            );
        });

        return token;
    } catch (err) {
        throw new Error('An error occurred while generating the token!');
    }
}

module.exports = {
    userRegister,
    userLogin,
};