const { userCookieName } = require('../config/environment');
const { isLogged } = require('../middleware/guards');
const { getAdById, userApply } = require('../services/dataService');
const errorHandler = require('../util/errorHandler');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    const adDetails = await getAdById(req.params.id).populate('author usersApplied', ['email', 'description']).lean();

    const user = res[userCookieName];
    if (user) {
        adDetails.isLogged = true;
        adDetails.isOwner = adDetails.author._id == user._id;
        adDetails.countApplies = adDetails.usersApplied.length;
        adDetails.hasApply = adDetails.usersApplied.find(u => u._id == user._id) ? true : false;
    }

    res.render('details', {
        adDetails,
        title: 'Details Page',
    });
});

detailsController.get('/:id/apply', isLogged, async (req, res) => {
    const adId = req.params.id;
    try {
        const userId = res[userCookieName]._id;
        await userApply(userId, adId);
        res.redirect(`/details/${adId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${adId}`);
    }
});

module.exports = { detailsController };