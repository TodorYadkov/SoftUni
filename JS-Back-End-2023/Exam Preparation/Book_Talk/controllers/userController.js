const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { userRegister, userLogin } = require('../services/userService.js');
const { userCookieName } = require('../config/environment.js');

userController.get('/register', (req, res) => {
    const userInput = {};
    res.render('register', {
        userInput,
        title: 'Register Page',
    });
});

userController.post('/register',
    body(['username', 'email', 'password', 'rePassword']).trim(),
    body('email')
        .notEmpty().withMessage('Email is required').bail()
        .isLength({ min: 10 }).withMessage('Email must be at least 10 characters long')
        .isEmail().withMessage('The email entered is not valid'),
    body('username')
        .notEmpty().withMessage('Username is required').bail()
        .isLength({ min: 4 }).withMessage('The username must be at least 4 characters long!'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    body('rePassword')
        .notEmpty().withMessage('Confirm password is required').bail()
        .custom((value, { req }) => {
            if (value != req.body.password) {
                throw new Error('The passwords do not match!');
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

            const userToken = await userRegister(userInput);
            res.cookie(userCookieName, userToken, { httpOnly: true });
            res.redirect('/');
        } catch (error) {
            const errors = errorHandler(error).message;
            res.render('register', {
                errors,
                userInput,
                title: 'Register Page',
            });
        }
    });

userController.get('/login', (req, res) => {
    const userInput = {};
    res.render('login', {
        userInput,
        title: 'Login Page',
    });
});

userController.post('/login',
    body('email')
        .notEmpty().withMessage('Email is required').bail()
        .isLength({ min: 10 }).withMessage('Email must be at least 10 characters long').bail()
        .isEmail().withMessage('The email entered is not valid'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            const userToken = await userLogin(userInput);

            res.cookie(userCookieName, userToken, { httpOnly: true });
            res.redirect('/');
        } catch (error) {
            const errors = errorHandler(error).message;
            res.render('login', {
                errors,
                userInput,
                title: 'Login Page',
            });
        }
    });

userController.get('/logout', async (req, res) => {
    res.clearCookie(userCookieName);
    res.redirect('/');
});

module.exports = { userController };