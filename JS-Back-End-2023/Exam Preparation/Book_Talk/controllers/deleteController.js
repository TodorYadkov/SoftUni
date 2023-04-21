const { userCookieName } = require('../config/environment.js');
const { deleteBookById, getBookById } = require('../services/bookService.js');
const { errorHandler } = require('../util/errorHandler.js');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await getBookById(bookId).lean();
        if (book.owner != res[userCookieName]._id) {
            throw new Error(`${res[userCookieName].username} is not the owner of this book!`);
        }

        await deleteBookById(bookId);
        res.redirect('/catalog');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/catalog');
    }
});

module.exports = { deleteController };