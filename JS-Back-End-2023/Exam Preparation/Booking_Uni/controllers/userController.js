const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { userRegister, userLogin } = require('../services/userService.js');
const { userCookieName } = require('../config/environment.js');

userController.get('/register', (req, res) => {
    const userInput = {};
    res.locals.loading = false;
    res.render('register', { userInput });
});

userController.post('/register',
    body(['email', 'username', 'password', 'rePassword']).trim(),
    body('email').notEmpty().withMessage('The email is required!').bail()
        .isEmail().withMessage('The email entered is not valid!')
        .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).withMessage('Email should only contain English letters and digits'),
    body('username').notEmpty().withMessage('Username is required!'),
    body('password').notEmpty().withMessage('Password is required!').bail()
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long!'),
    body('rePassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('The passwords do not match!');
        }
        return true;
    }),
    async (req, res) => {
        const userInput = req.body;
        res.locals.loading = false;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const { email, username, password } = userInput;
            const userToken = await userRegister({ email, username, password });

            res.cookie(userCookieName, userToken, { httpOnly: true });
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('register', { userInput });
        }
    });

userController.get('/login', (req, res) => {
    const userInput = {};
    res.locals.loading = false;
    res.render('login', { userInput });
});

userController.post('/login',
    body(['email', 'password']).trim(),
    body('email').notEmpty().withMessage('Email is required!').bail()
        .isEmail().withMessage('The email entered is not valid!')
        .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/gi).withMessage('Email should only contain English letters and digits'),
    body('password').notEmpty().withMessage('Password is required!').bail()
        .matches(/^[a-zA-Z0-9]*$/g).withMessage('The password must contain only English letters and numbers!').bail()
        .isLength({ min: 5 }).withMessage('Password must be a least 5 characters long!'),
    async (req, res) => {
        const userInput = req.body;
        res.locals.loading = false;
        try {
            const { email, password } = userInput;
            const userToken = await userLogin({ email, password });
            res.cookie(userCookieName, userToken, { httpOnly: true });
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('login', { userInput });
        }
    });

userController.get('/logout', (req, res) => {
    res.clearCookie(userCookieName);
    res.redirect('/');
});

module.exports = { userController };