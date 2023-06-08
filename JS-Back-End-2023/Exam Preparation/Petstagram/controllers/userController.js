const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { userRegister, userLogin } = require('../services/userService.js');
const { userCookieName } = require('../config/environment.js');

// register
userController.get('/register', (req, res) => {
    const userInput = {};
    res.render('register', {
        title: 'Petstagram',
        userInput,
    });
});

userController.post('/register',
    body(['username', 'email', 'password', 'rePass']).trim(),
    body('username')
        .notEmpty().withMessage('Username is required').bail()
        .isLength({ min: 2 }).withMessage('Username must be at least 2 characters!'),
    body('email')
        .notEmpty().withMessage('Email is required').bail()
        .isLength({ min: 10 }).withMessage('Email must be at least 10 characters!'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long!'),
    body('rePass')
        .notEmpty().withMessage('Repeat Password is required').bail()
        .custom((value, { req }) => value == req.body['password']).withMessage('Passwords do not match!'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const userToken = await userRegister(userInput);
            res.cookie(userCookieName, userToken, { httpOnly: true });

            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('register', {
                userInput,
                title: 'Petstagram',
            });
        }
    });

// login
userController.get('/login', (req, res) => {
    const userInput = {};
    res.render('login', {
        title: 'Petstagram',
        userInput,
    });
});

userController.post('/login',
    body(['username', 'password']).trim(),
    body('username')
        .notEmpty().withMessage('Username is required').bail()
        .isLength({ min: 2 }).withMessage('Username must be at least 2 characters!'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long!'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const userToken = await userLogin(userInput);
            res.cookie(userCookieName, userToken, { httpOnly: true });

            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('login', {
                userInput,
                title: 'Petstagram',
            });
        }
    });

//logout
userController.get('/logout', (req, res) => {
    res.clearCookie(userCookieName);
    res.redirect('/');
});

module.exports = { userController };