const registerController = require('express').Router();
const { body, validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler.js');
const { userRegister } = require('../services/userService.js');
const { userCookieName } = require('../config/environment.js');

registerController.get('/', (req, res) => {
    const userInput = {};
    res.render('register', {
        userInput,
        title: 'Register',
    });
});

registerController.post('/',
    body(['email', 'firstName', 'lastName', 'password', 'rePassword']).trim(),
    body('email')
        .notEmpty().withMessage('Email is required').bail()
        .custom((value) => /^[A-Z]+@[A-Z]+\.[A-Z]+$/gi.test(value)).withMessage('The email must contain only English letters!')
        .isEmail().withMessage('Email is invalid'),
    body('firstName')
        .notEmpty().withMessage('First name is required').bail()
        .isLength({ min: 1 }).withMessage('First name must be at least 1 characters long'),
    body('lastName')
        .notEmpty().withMessage('Last name is required').bail()
        .isLength({ min: 1 }).withMessage('First name must be at least 1 characters long'),
    body('password')
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('rePassword')
        .custom((value, { req }) => {
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
            res.cookie(userCookieName, userToken);
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('register', {
                userInput,
                title: 'Register'
            });
        }
    });

module.exports = { registerController };