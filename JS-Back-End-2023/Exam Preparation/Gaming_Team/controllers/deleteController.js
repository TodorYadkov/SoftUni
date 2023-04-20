const { userCookieName } = require('../config/environment.js');
const { deleteGame, getGameById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    try {
        const gameId = req.params.id;
        const gameDetails = await getGameById(gameId).lean();
        if (res[userCookieName]._id != gameDetails.owner) {
            throw new Error(`${res[userCookieName].username} is not the owner of this game!`);
        }

        await deleteGame(req.params.id);
        res.redirect('/catalog');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/details/' + req.params.id);
    }
});

module.exports = { deleteController };