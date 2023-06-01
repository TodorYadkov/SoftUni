const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getDataById, updateDataById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

editController.get('/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        const itemDetails = await getDataById(itemId).lean();
        itemDetails.payment = itemDetails.payment.toLocaleLowerCase();
        res.render('edit', {
            itemDetails,
            title: 'Edit Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${itemId}`);
    }
});

editController.post('/:id',
    body(['name', 'imageUrl', 'price', 'description', 'payment']).trim(),
    body('name')
        .notEmpty().withMessage('Name is required').bail()
        .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('imageUrl')
        .notEmpty().withMessage('Image is required').bail()
        .isURL().withMessage('Invalid URL')
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Image must starts with http:// or https://'),
    body('price').notEmpty().withMessage('Price is required!').bail()
        .isNumeric().withMessage('Price must be a number!').bail()
        .custom((value) => value >= 0).withMessage('Price must be a positive number!'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
    body('payment')
        .notEmpty().withMessage('Payment is required').bail()
        .custom((value) => ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'].includes(value))
        .withMessage('payment is incorrect'),
    async (req, res) => {
        const itemId = req.params.id;
        const itemDetails = Object.assign(req.body, { _id: itemId });
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            await updateDataById(itemId, itemDetails);
            res.redirect(`/details/${itemId}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('edit', {
                itemDetails,
                title: 'Edit Page',
            });
        }
    });

module.exports = { editController };