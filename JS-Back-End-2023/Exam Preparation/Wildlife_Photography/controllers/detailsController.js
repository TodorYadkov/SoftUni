const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getDataById, addVoteOnPost } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');
const { isLogged } = require('../middleware/guards.js');
const state = {};


detailsController.get('/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        const itemDetails = await getDataById(itemId).populate('author votesOnPost', ['firstName', 'lastName', 'email']).lean();
        itemDetails.authorName = `${itemDetails.author.firstName} ${itemDetails.author.lastName}`;
        itemDetails.peopleVoted = itemDetails.votesOnPost.map(p => p.email).join(', ');

        if (res[userCookieName]) {
            const userId = res[userCookieName]._id;
            itemDetails.isLogged = true;
            itemDetails.isOwner = userId == itemDetails.author._id;
            itemDetails.hasVoted = itemDetails.votesOnPost.some(u => u._id == userId);
        }

        state.itemDetails = itemDetails;

        res.render('details', {
            itemDetails,
            title: 'Details Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${itemId}`);
    }
});

detailsController.get('/:id/vote', isLogged, async (req, res) => {
    const itemId = req.params.id;
    const vote = Number(req.query.q);
    try {
        if (state.itemDetails.hasVoted) {
            throw new Error(`${res[userCookieName].firstName} ${res[userCookieName].lastName} is already voted on this post`);
        }

        const userId = res[userCookieName]._id;
        await addVoteOnPost(itemId, userId, vote);
        res.redirect(`/details/${itemId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${itemId}`);
    }
});

module.exports = { detailsController };