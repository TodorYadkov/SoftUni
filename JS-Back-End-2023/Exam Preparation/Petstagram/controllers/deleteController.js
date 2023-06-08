const deleteController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { deleteDataById, getDataById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

deleteController.get('/:id', async (req, res) => {
    const photoId = req.params.id;
    try {
        const photo = await getDataById(photoId).lean();
        if (photo.owner != res[userCookieName]._id) {
            throw new Error(`${res[userCookieName].username} is not the owner`);
        }

        await deleteDataById(photoId);
        res.redirect('/catalog');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${photoId}`);
    }
});

module.exports = { deleteController };