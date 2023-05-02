const deleteController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { deleteDataById, getDataById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

deleteController.get('/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        const item = await getDataById(itemId).lean();
        if (item.author != res[userCookieName]._id) {
            throw new Error(`${res[userCookieName].firstName} ${res[userCookieName].lastName} is not the owner of the current offer`);
        }

        await deleteDataById(itemId);
        res.redirect('/catalog');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${itemId}`);
    }
});

module.exports = { deleteController };