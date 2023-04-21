const { getAllBooks } = require('../services/bookService.js');
const { errorHandler } = require('../util/errorHandler.js');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
    try {
        const allBooks = await getAllBooks().lean();
        res.render('catalog', {
            allBooks,
            title: 'Catalog Page',
        });

    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

module.exports = { catalogController };