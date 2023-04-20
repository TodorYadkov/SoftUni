const { userCookieName } = require('../config/environment.js');
const { userRegister } = require('../services/userService.js');
const { errorHandler } = require('../util/errorHandler.js');
const { body, validationResult } = require('express-validator');

const registerController = require('express').Router();

registerController.get('/', (req, res) => {
    const userInput = {};
    res.render('register', {
        userInput,
        title: 'Register Page - Gaming Team',
        pageId: 'register',
    });
});

registerController.post('/',
    body(['username', 'email', 'password', 'rePassword']).trim(),
    body('username').notEmpty().withMessage('Username is required!').bail()
        .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long!'),
    body('email').notEmpty().withMessage('Email is required!').bail()
        .isEmail().withMessage('Email is invalid!').bail()
        .isLength({ min: 10 }).withMessage('Email must be at least 10 characters long!'),
    body('password').notEmpty().withMessage('Password is required!').bail()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long!'),
    body('rePassword').custom((value, { req }) => {
        if (value !== req.body.password) {
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

            const token = await userRegister(userInput);
            res.cookie(userCookieName, token, { httpOnly: true });
            res.redirect('/');
        } catch (err) {
            const error = errorHandler(err).message;
            res.render('register', {
                userInput,
                error,
                title: 'Register Page - Gaming Team',
                pageId: 'register',
            });
        }
    });

module.exports = { registerController };