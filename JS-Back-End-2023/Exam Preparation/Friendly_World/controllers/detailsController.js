const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getDataById, addDonation } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');
const { isLogged } = require('../middleware/guards.js');

detailsController.get('/:id', async (req, res) => {
    const animalId = req.params.id;
    try {
        const animalDetails = await getDataById(animalId).lean();

        if (res[userCookieName]) {
            const userId = res[userCookieName]._id;
            animalDetails.isLogged = true;
            animalDetails.isOwner = userId == animalDetails.owner._id;
            animalDetails.isDonate = animalDetails.donations.some(u => u == userId);
        }

        res.render('details', {
            animalDetails,
            title: 'Details Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${animalId}`);
    }
});

detailsController.get('/:id/donate', isLogged, async (req, res) => {
    const animalId = req.params.id;
    try {
        const userId = res[userCookieName]._id;
        const animal = await getDataById(animalId).lean();
        // Check if the current user is not the owner
        if (animal.owner == res[userCookieName]._id) {
            throw new Error(`${res[userCookieName].email} cannot perform this action - He is the owner`);
        }
        // Check if the user is already donated
        if (animal.donations.some(u => u == userId)) {
            throw new Error(`${res[userCookieName].email} already donated`);
        }

        await addDonation(userId, animalId);
        res.redirect(`/details/${animalId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/not-found');
    }
});

module.exports = { detailsController };