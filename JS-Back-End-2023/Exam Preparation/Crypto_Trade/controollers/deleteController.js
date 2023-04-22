const { userCookieName } = require('../config/environment.js');
const { deleteDataById, getDataById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

const deletecontroller = require('express').Router();

deletecontroller.get('/:id', async (req, res) => {
    const offerId = req.params.id;
    try {
        const offer = await getDataById(offerId).lean();
        if (res[userCookieName]._id != offer.owner) {
            res.redirect('/details/' + offerId);
            return;
        }

        await deleteDataById(offerId);
        res.redirect('/catalog');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/details/' + offerId);
    }
});

module.exports = { deletecontroller };