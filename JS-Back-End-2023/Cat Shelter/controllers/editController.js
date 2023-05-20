const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getCatById, getAllBreeds, updateCat } = require('../services/catServices');
const { errorHandler } = require('../util/errorHandler');
const upload = require('../middleware/uploadFiles');
const state = {};

editController.get('/:id', async (req, res) => {
    const catId = req.params.id;
    try {
        const catDetails = await getCatById(catId).populate('breed',).lean();
        const allBreeds = await getAllBreeds().lean();
        const userInput = catDetails;
        state.allBreeds = allBreeds;

        res.render('editCat', {
            allBreeds,
            userInput,
            title: 'Cat Shelter - Edit Cat',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

editController.post('/:id', upload.single('upload'), async (req, res) => {
    const userInput = req.body;
    const catId = req.params.id;
    try {
        if (req.file?.originalname) {
            userInput.imagePath = `/static/images/${req.file.originalname}`;
        }

        const data = Object.fromEntries(Object.entries(userInput).map(([k, v]) => [k, v.trim()]));
        const updatedCat = await updateCat(catId, data);
        res.redirect('/');
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('addCat', {
            userInput,
            allBreeds: state.allBreeds,
            title: 'Cat Shelter - Edit Cat',
        });
    }
});

module.exports = { editController };