const { userCookieName } = require('../config/enviroments');
const { deletePlay } = require('../services/dataService');
const { errorHandler } = require('../util/errorHandler');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    const playId = req.params.id;
    try {
        const userId = res[userCookieName]._id;
        await deletePlay(playId, userId);
        res.redirect('/');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

module.exports = { deleteController };