const searchController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getBySearch } = require('../services/dataService');
const errorHandler = require('../util/errorHandler');
const searchState = {};

searchController.get('/', async (req, res) => {
    const search = req.query.q || '';
    try {
        let allFound = [];
        let isEmpty = true;
        if (search != '') {
            [allFound] = await getBySearch(search).populate('myAds', ['headline', 'companyName']).lean();
            searchState.allFound = allFound.myAds;
            isEmpty = false;
        }

        res.render('search', {
            isEmpty,
            search,
            allFound: searchState.allFound,
            title: 'Search',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/search');
    }
});

searchController.post('/',
    body('search')
        .trim()
        .notEmpty().withMessage('Search is required. Please enter an email').bail()
        .isEmail().withMessage('Email is invalid')
        .custom((value) => /^[A-Z]+@[A-Z]+\.[A-Z]+$/gi.test(value))
        .withMessage('Only English letters are allowed for any of the parts of the email'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            const { search } = req.body;
            res.redirect(`/search?q=${search}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('search', {
                allFound: searchState.allFound,
                title: 'Search',
            });
        }
    });


module.exports = { searchController };