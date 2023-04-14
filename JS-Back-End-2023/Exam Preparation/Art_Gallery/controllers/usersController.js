const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { userRegister, userLogin } = require('../services/userService.js');
const { userCookieName } = require('../config/environment.js');
const usersController = require('express').Router();

// register
usersController.get('/register', (req, res) => {
    const userInput = {};
    res.render('register', {
        title: 'Register Page',
        userInput,
    });
});

usersController.post('/register',
    body(['username', 'password', 'address', 're-password']).trim(),
    body('username').isLength({ min: 4 }).withMessage('Username must be at least 4 characters!'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!'),
    body('address').isLength({ max: 20 }).withMessage('Address must be a maximum of 20 characters long!'),
    body('re-password').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords do not match!');
        }
        return true;
    }),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const { username, password, address } = userInput;
            const userToken = await userRegister({ username, password, address });

            res.cookie(userCookieName, userToken, { httpOnly: true });
            res.redirect('/');
        } catch (error) {
            res.render('register', {
                userInput,
                title: 'Register Page',
                error: errorHandler(error).message.join('\n'),
            });
        }
    });
// login
usersController.get('/login', (req, res) => {
    const userInput = {};
    res.render('login', {
        title: 'Login Page',
        userInput,
    });
});

usersController.post('/login',
    body(['username', 'passwoerd']).trim(),
    body('username').isLength({ min: 4 }).withMessage('Username must be at least 4 characters!'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const { username, password } = userInput;
            const userToken = await userLogin({ username, password });

            res.cookie(userCookieName, userToken, { httpOnly: true });
            res.redirect('/');
        } catch (error) {
            res.render('login', {
                userInput,
                title: 'Login Page',
                error: errorHandler(error).message.join('\n'),
            });
        }
    });

//logout
usersController.get('/logout', (req, res) => {
    res.clearCookie(userCookieName);
    res.redirect('/');
});

module.exports = { usersController };