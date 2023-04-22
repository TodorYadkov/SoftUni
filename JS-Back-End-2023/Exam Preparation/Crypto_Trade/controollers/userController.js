const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { userCookieName } = require('../config/environment.js');
const { errorHandler } = require('../util/errorHandler.js');
const { userRegister, userLogin } = require('../services/userService.js');


userController.get('/register', (req, res) => {
    const userInput = {};
    res.render('register', {
        userInput,
        title: 'Register Page - Crypto Web',
    });
});

userController.post('/register',
    body(['username', 'email', 'password', 'rePassword']).trim(),
    body('username')
        .notEmpty().withMessage('Username is required').bail()
        .isLength({ min: 5 }).withMessage('The username should be at least 5 characters long'),
    body('email')
        .notEmpty().withMessage('Email is required').bail()
        .isEmail().withMessage('Email is incorrect')
        .isLength({ min: 10 }).withMessage('The email should be at least 10 character long'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 4 }).withMessage('The password should be at least 4 characters long'),
    body('rePassword')
        .notEmpty().withMessage('Confirm password is required').bail()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
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
            res.locals.errors = errorHandler(error).message;
            res.render('register', {
                userInput,
                title: 'Register Page - Crypto Web',
            });
        }
    });

userController.get('/login', (req, res) => {
    const userInput = {};
    res.render('login', {
        userInput,
        title: 'Login Page - Crypto Web',
    });
});

userController.post('/login',
    body(['email', 'password']).trim(),
    body('email')
        .notEmpty().withMessage('Email is required').bail()
        .isEmail().withMessage('Email is incorrect')
        .isLength({ min: 10 }).withMessage('The email should be at least 10 character long'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 4 }).withMessage('The password should be at least 4 characters long'),
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
                title: 'Login Page - Crypto Web',
            });
        }
    });

userController.get('/logout', async (req, res) => {
    res.clearCookie(userCookieName);
    res.redirect('/');
});

module.exports = { userController };