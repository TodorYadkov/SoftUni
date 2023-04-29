const { userCookieName } = require('../config/environment');
const { getAdById, deleteAd } = require('../services/dataService');
const errorHandler = require('../util/errorHandler');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    try {
        const currentAd = await getAdById(req.params.id).lean();
        if (currentAd.author != res[userCookieName]._id) {
            throw new Error(`${res[userCookieName].email} is not author on this Ad!`);
        }

        await deleteAd(res[userCookieName]._id, req.params.id);
        res.redirect('/catalog');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${req.params.id}`);
    }
});

module.exports = { deleteController };