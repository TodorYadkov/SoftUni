const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getOfferById, updateOffer } = require('../services/dataService.js');
const errorHandler = require('../util/errorHandler.js');
const offerState = { offerDetails: null };

editController.get('/:id', async (req, res) => {
    const offerId = req.params.id;
    try {
        const offerDetails = await getOfferById(offerId).lean();
        if (offerDetails.bidder.length !== 0) {
            offerDetails.hasBidder = true;
        }
        offerDetails.category = offerDetails.category.toLocaleLowerCase();
        offerState.offerDetails = offerDetails;

        res.render('edit', {
            offerDetails,
            title: 'Edit Auction'
        });
    } catch (error) {
        console.log(errorHandler(error).message);
        res.redirect(`/details/${offerId}`);
    }

});

editController.post('/:id',
    body(['title', 'category', 'imageUrl', 'price', 'description']).trim(),
    body('title')
        .notEmpty().withMessage('Title is required').bail()
        .isLength({ min: 4 }).withMessage('Title must be at least 4 characters long'),
    body('category')
        .notEmpty().withMessage('Category is required')
        .custom((value) => ['estate', 'vehicles', 'furniture', 'electronics', 'other'].includes(value))
        .withMessage('Select the correct category'),
    body('imageUrl')
        .notEmpty().withMessage('Image is required'),
    body('price')
        .notEmpty().withMessage('Price is required').bail()
        .isNumeric().withMessage('Price must be a number').bail()
        .custom((value) => value > 0).withMessage('The price cannot be zero or less than zero'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ max: 200 }).withMessage('The description should be a maximum of 200 characters long'),
    async (req, res) => {
        const offerDetails = req.body;
        const offerId = req.params.id;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }
            // Get valid value to category
            const validValue = ['vehicles', 'estate', 'electronics', 'furniture', 'other'];
            const index = validValue.findIndex((v) => v == offerDetails.category);
            const newValue = ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other'];
            offerDetails.category = newValue[index];
            // If has a bidder set price from offerState
            if (offerState.offerDetails.hasBidder) {
                offerDetails.price = offerState.offerDetails.price;
            }

            const newOffer = await updateOffer(offerId, offerDetails);
            res.redirect(`/details/${offerId}`);
        } catch (error) {
            offerDetails._id = offerId;
            res.locals.errors = errorHandler(error).message;
            res.render('edit', {
                offerDetails,
                title: 'Edit Auction'
            });
        }
    });

module.exports = { editController };