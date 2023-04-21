const { userCookieName } = require('../config/environment.js');
const { isLogged } = require('../middleware/guards.js');
const { getBookById, hasWished, wishBook } = require('../services/bookService.js');
const { errorHandler } = require('../util/errorHandler.js');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const bookDetails = await getBookById(bookId).lean();
        const user = res[userCookieName];
        if (user) {
            const userId = user._id;
            bookDetails.isLogged = true;
            bookDetails.isOwner = userId == bookDetails.owner;
            bookDetails.hasWished = await hasWished(bookId, userId);
        }

        res.render('details', {
            bookDetails,
            title: 'Details Page',
        });

    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/details/' + bookId);
    }
});

detailsController.get('/:id/wish', isLogged, async (req, res) => {
    const bookId = req.params.id;
    try {
        await wishBook(bookId, res[userCookieName]._id);
        res.redirect(`/details/${bookId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/details/' + bookId);
    }
});

module.exports = { detailsController };