const loginController = require('express').Router();
const { body, validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler.js');
const { userLogin } = require('../services/userService.js');
const { userCookieName } = require('../config/environment.js');

loginController.get('/', (req, res) => {
    const userInput = {};
    res.render('login', {
        userInput,
        title: 'Login',
    });
});

loginController.post('/',
    body(['email', 'password']).trim(),
    body('email')
        .notEmpty().withMessage('Email is required').bail()
        .custom((value) => /^[A-Z]+@[A-Z]+\.[A-Z]+$/gi.test(value)).withMessage('The email must contain only English letters!')
        .isEmail().withMessage('Email is invalid'),
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
                title: 'Login'
            });
        }
    });

module.exports = { loginController };