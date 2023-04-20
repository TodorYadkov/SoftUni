const { userCookieName } = require('../config/environment.js');
const { errorHandler } = require('../util/errorHandler.js');
const { body, validationResult } = require('express-validator');
const { userLogin } = require('../services/userService.js');

const loginController = require('express').Router();

loginController.get('/', (req, res) => {
    const userInput = {};
    res.render('login', {
        userInput,
        title: 'Login Page - Gaming Team',
        pageId: 'login',
    });
});


loginController.post('/',
    body(['email', 'password']).trim(),
    body('email').notEmpty().withMessage('Email is required!').bail()
        .isEmail().withMessage('Email is invalid!').bail()
        .isLength({ min: 10 }).withMessage('Email must be at least 10 characters long!'),
    body('password').notEmpty().withMessage('Password is required!').bail()
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
        } catch (err) {
            const error = errorHandler(err).message;
            res.render('login', {
                userInput,
                error,
                title: 'Login Page - Gaming Team',
                pageId: 'login',
            });
        }
    });

module.exports = { loginController };