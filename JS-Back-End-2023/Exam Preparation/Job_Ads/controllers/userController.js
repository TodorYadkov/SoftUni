const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler');
const { userRegister, userLogin } = require('../services/userService');
const { userCookieName } = require('../config/environment');

userController.get('/register', (req, res) => {
    const userInput = {};
    res.render('register', {
        userInput,
        title: 'Register Page',
    });
});

userController.post('/register',
    body(['email', 'password', 'rePass', 'description']).trim(),
    body('email')
        .notEmpty().withMessage('Email is required').bail()
        .isEmail().withMessage('Email is invalid')
        .custom((value) => /^[A-Z]+@[A-Z]+\.[A-Z]+$/gi.test(value))
        .withMessage('Only English letters are allowed for any of the parts of the email'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('rePass')
        .notEmpty().withMessage('Repeat Password is required').bail()
        .custom((value, { req }) => {
            if (value != req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ max: 40 }).withMessage('Description must be a maximum 40 characters long'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const userToken = await userRegister(userInput);
            res.cookie(userCookieName, userToken);
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('register', {
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
    body(['email', 'password']).trim(),
    body('email')
        .notEmpty().withMessage('Email is required').bail()
        .isEmail().withMessage('Email is invalid')
        .custom((value) => /^[A-Z]+@[A-Z]+\.[A-Z]+$/gi.test(value))
        .withMessage('Only English letters are allowed for any of the parts of the email'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const userToken = await userLogin(userInput);
            res.cookie(userCookieName, userToken);
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('login', {
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