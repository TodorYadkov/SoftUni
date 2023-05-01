const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler');
const { userRegister, userLogin } = require('../services/userService');
const { userCookieName } = require('../config/environment');

userController.get('/register', (req, res) => {
    const userInput = { gender: 'male' };
    res.render('register', {
        userInput,
        title: 'Register Page',
    });
});

userController.post('/register',
    body(['name', 'username', 'password', 'rePass']).trim(),
    body('name')
        .notEmpty().withMessage('Name is required').bail()
        .custom((value) => /^[a-zA-Z]+ [a-zA-Z]+$/g.test(value)).withMessage('Name must be in the following format - "First Name" "Last Name"'),
    body('username')
        .notEmpty().withMessage('Username is required').bail()
        .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
    body('rePass')
        .notEmpty().withMessage('Repeat Password is required')
        .custom((value, { req }) => {
            if (value != req.body.password) {
                throw new Error('Password do not match');
            }
            return true;
        }),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
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
    body(['username', 'password', 'rePass']).trim(),
    body('username')
        .notEmpty().withMessage('Username is required').bail()
        .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
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