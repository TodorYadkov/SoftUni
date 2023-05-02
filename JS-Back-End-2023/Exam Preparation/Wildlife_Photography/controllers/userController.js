const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { userRegister, userLogin } = require('../services/userService.js');
const { userCookieName } = require('../config/environment.js');

// register
userController.get('/register', (req, res) => {
    const userInput = {};
    res.render('register', {
        title: 'Register Page',
        userInput,
    });
});
userController.post('/register',
    body(['firstName', 'lastName', 'email', 'password', 'rePass']).trim(),
    body('firstName')
        .notEmpty().withMessage('First Name is required').bail()
        .isLength({ min: 3 }).withMessage('First Name must be at least 3 characters!')
        .custom((value) => /^[A-Za-z]+$/g.test(value)).withMessage('First name must contain only English letters'),
    body('lastName')
        .notEmpty().withMessage('Last Name is required').bail()
        .isLength({ min: 5 }).withMessage('Last Name must be at least 5 characters long')
        .custom((value) => /^[A-Za-z]+$/g.test(value)).withMessage('Last Name must contain only English letters'),
    body('email')
        .notEmpty().withMessage('Email is requied').bail()
        .isEmail().withMessage('Invalid email')
        .custom((value) => /^[a-z]+@[a-z]+\.[a-z]+$/gi.test(value)).withMessage('The email must contain only English characters and be in the following format: <name>@<domain>.<extension>'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long!'),
    body('rePass').custom((value, { req }) => {
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

            const userToken = await userRegister(userInput);
            res.cookie(userCookieName, userToken, { httpOnly: true });

            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('register', {
                userInput,
                title: 'Register Page',
            });
        }
    });

// login
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
        .notEmpty().withMessage('Email is requied').bail()
        .isEmail().withMessage('Invalid email')
        .custom((value) => /^[a-z]+@[a-z]+\.[a-z]+$/gi.test(value)).withMessage('The email must contain only English characters and be in the following format: <name>@<domain>.<extension>'),
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
                title: 'Login Page',
            });
        }
    });

//logout
userController.get('/logout', (req, res) => {
    res.clearCookie(userCookieName);
    res.redirect('/');
});

module.exports = { userController };