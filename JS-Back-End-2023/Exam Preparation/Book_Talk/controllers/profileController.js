const profileController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getMyBooks } = require('../services/bookService.js');
const { errorHandler } = require('../util/errorHandler.js');

profileController.get('/', async (req, res) => {
    try {
        const myBooks = await getMyBooks(res[userCookieName]._id).lean();
        res.render('profile', {
            myBooks,
            title: 'Profile Page',
            email: res[userCookieName].email,
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

module.exports = { profileController };