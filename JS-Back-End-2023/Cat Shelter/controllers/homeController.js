const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler');
const { getAllCats } = require('../services/catServices');
const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    try {
        const searchStr = req.query.search;
        const allCats = await getAllCats(searchStr).populate('breed').lean();

        res.render('home', {
            allCats,
            searchStr,
            title: 'Cat Shelter - Home'
        });
    } catch (error) {
        console.log(errorHandler(error).message);
        res.redirect('/not-found');
    }
});

homeController.post('/',
    body('cat-search')
        .trim()
        .notEmpty().withMessage('Search is required')
        .isLength({ min: 2 }).withMessage('Search must be at least 2 characters long'),
    async (req, res) => {
        const searchStr = req.body['cat-search'];
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            res.redirect(`/?search=${searchStr}`);
        } catch (error) {
            const allCats = [];
            res.locals.errors = errorHandler(error).message;
            res.render('home', {
                allCats,
                searchStr,
                title: 'Cat Shelter - Home'
            });
        }
    });

module.exports = { homeController };