const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler');
const { userRegister, userLogin } = require('../services/userService');
const { userCookieName } = require('../config/enviroments');

userController.get('/register', (req, res) => {
    const userInput = {};
    res.render('register', {
        userInput,
        title: 'Express Exam',
    });
});

userController.post('/register',
    body(['username', 'password', 'rePass']).trim(),
    body('username')
        .notEmpty().withMessage('Username is required').bail()
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long').bail()
        .custom((value) => /^[a-z0-9]+$/gi.test(value)).withMessage('Username must contain only English letters and digits'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long').bail()
        .custom((value) => /^[a-z0-9]+$/gi.test(value)).withMessage('Password must contain only English letters and digits'),
    body('rePass')
        .notEmpty().withMessage('Repeat Password is required').bail()
        .custom((value, { req }) => value == req.body.password).withMessage('The passwords do not match'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            const userToken = await userRegister(userInput);
            res.cookie(userCookieName, userToken, { httpOnly: true });
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('register', {
                userInput,
                title: 'Express Exam',
            });
        }
    });

userController.get('/login', (req, res) => {
    const userInput = {};
    res.render('login', {
        userInput,
        title: 'Express Exam',
    });
});

userController.post('/login',
    body(['username', 'password']).trim(),
    body('username')
        .notEmpty().withMessage('Username is required').bail()
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long').bail()
        .custom((value) => /^[a-z0-9]+$/gi.test(value)).withMessage('Username must contain only English letters and digits'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long').bail()
        .custom((value) => /^[a-z0-9]+$/gi.test(value)).withMessage('Password must contain only English letters and digits'),
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
            res.locals.errors = errorHandler(error).message;
            res.render('login', {
                userInput,
                title: 'Express Exam',
            });
        }
    });

userController.get('/logout', async (req, res) => {
    res.clearCookie(userCookieName);
    res.redirect('/');
});

module.exports = { userController };