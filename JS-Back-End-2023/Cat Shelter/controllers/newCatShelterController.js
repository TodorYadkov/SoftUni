const { getCatById, newCatShelter } = require('../services/catServices');
const { errorHandler } = require('../util/errorHandler');

const newCatShelterController = require('express').Router();

newCatShelterController.get('/:id', async (req, res) => {
    try {
        const catId = req.params.id;
        const cat = await getCatById(catId);
        if (cat.hasShelter) {
            throw new Error('The cat has a new home');
        }

        await newCatShelter(catId);
        res.redirect('/');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

module.exports = { newCatShelterController };