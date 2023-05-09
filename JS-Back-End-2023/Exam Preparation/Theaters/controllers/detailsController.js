const detailsController = require('express').Router();
const { userCookieName } = require('../config/enviroments');
const { getPlayById, addLike } = require('../services/dataService');
const { errorHandler } = require('../util/errorHandler');


detailsController.get('/:id', async (req, res) => {
    const playId = req.params.id;
    try {
        const detailsPlay = await getPlayById(playId).lean();
        const user = res[userCookieName];

        if (user._id == detailsPlay.author) {
            detailsPlay.isOwner = true;
        } else {
            detailsPlay.hasLike = detailsPlay.usersLiked.some(u => u == user._id);
        }

        res.render('details', {
            detailsPlay,
            title: 'Express Retake Exam January 2019',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

detailsController.get('/:id/like', async (req, res) => {
    const playId = req.params.id;
    try {
        
        await addLike(res[userCookieName]._id, playId);
        res.redirect(`/details/${playId}`);

    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

module.exports = { detailsController };