const { userCookieName } = require('../config/enviroments');
const { getGuestPlaysDSC, getUserPlaysDSC, getUserPlayedPlays } = require('../services/dataService');
const { errorHandler } = require('../util/errorHandler');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    const sortType = req.query.sort;
    const showPlayed = req.query.q;
    let allPlays = {};
    try {
        if (res[userCookieName]) {
            allPlays = showPlayed == 'show' ? await getUserPlayedPlays() : await getUserPlaysDSC();
            allPlays.isDisplayed = showPlayed == 'show' ? true : false;
            if (sortType === 'date') {
                allPlays.sort((a, b) => b.created - a.created);
            } else if (sortType === 'likes') {
                allPlays.sort((a, b) => b.usersLiked.length - a.usersLiked.length);
            }
        } else {
            allPlays = await getGuestPlaysDSC();
        }

        res.render('home', {
            allPlays,
            title: 'Express Exam',
        });
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('home', {
            allPlays,
            title: 'Express Exam',
        });
    }
});

module.exports = { homeController };