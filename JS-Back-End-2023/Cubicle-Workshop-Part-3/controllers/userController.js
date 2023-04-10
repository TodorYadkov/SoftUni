const userController = require('express').Router();
const { sessionName } = require('../config/appConfig.js');
const { userRegister, userLogin, userLogout } = require('../services/userService.js');

userController.get('/login', (req, res) => {
    const userInput = {};
    res.render('login', { userInput });
});

userController.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username === '' || password === '') {
            throw new Error('All fields are required!');
        }

        const token = await userLogin({ username, password });
        res.cookie(sessionName, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        res.render('login', {
            err: error.message,
            userInput: { username, password }
        });
    }
});

userController.get('/register', (req, res) => {
    const userInput = {};
    res.render('register', { userInput });
});

userController.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    try {
        if (username === '' || password === '') {
            throw new Error('All fields are required!');
        }
        if (password !== repeatPassword) {
            throw new Error('The password does not match!');
        }

        const userData = {
            username: username.trim(),
            password: password.trim(),
        };

        const token = await userRegister(userData);
        res.cookie(sessionName, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        res.render('register', {
            err: error.message,
            userInput: { username, password, repeatPassword }
        });
    }
});

userController.get('/logout', (req, res) => {
    userLogout(res);
    res.redirect('/');
});

module.exports = { userController };