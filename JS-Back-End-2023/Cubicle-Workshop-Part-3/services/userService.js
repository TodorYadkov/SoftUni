const { User } = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { saltRounds, secret, sessionName } = require('../config/appConfig.js');

const userRegister = async ({ username, password }) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ username, password: hashedPassword });
    const token = jwt.sign({ _id: newUser._id, username: newUser.username }, secret, { expiresIn: '2d' });
    return token;
};

const userLogin = async ({ username, password }) => {
    const user = await User.findOne({ username });
    if (user === null) {
        throw new Error('Username or password do not match!');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Username or password do not match!');
    }

    const token = jwt.sign({ _id: user._id, username: user.username }, secret, { expiresIn: '2d' });
    // const token = new Promise((resolve, reject) => {
    //     jwt.sign({
    //         id: user._id,
    //         username: user.username
    //     }, secret, { expiresIn: '2d' }, (err, token) => {
    //         if (err) {
    //             throw reject(err);
    //         }

    //         resolve(token);
    //     });
    // });

    return token;
};

const userLogout = (res) => res.clearCookie(sessionName);

module.exports = {
    userRegister,
    userLogin,
    userLogout,
};