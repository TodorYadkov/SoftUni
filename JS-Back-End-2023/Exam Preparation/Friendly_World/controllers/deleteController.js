const deleteController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { deleteDataById, getDataById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

deleteController.get('/:id', async (req, res) => {
    const animalId = req.params.id;
    try {
        const animal = await getDataById(animalId).lean();
        // Check if the current user is owner
        if (animal.owner != res[userCookieName]._id) {
            throw new Error(`${res[userCookieName].email} is not the owner`);
        }

        await deleteDataById(animalId);
        res.redirect('/catalog');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/not-found');
    }
});

module.exports = { deleteController };