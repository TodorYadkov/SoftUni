const addCatController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getAllBreeds, addNewCat } = require('../services/catServices');
const { errorHandler } = require('../util/errorHandler');
const uploadFiles = require('../middleware/uploadFiles');
const upload = require('../middleware/uploadFiles');

const state = {};

addCatController.get('/', async (req, res) => {
    try {
        const userInput = {};
        const allBreeds = await getAllBreeds().lean();

        state.userInput = userInput;
        state.allBreeds = allBreeds;

        res.render('addCat', {
            userInput,
            allBreeds,
            title: 'Cat Shelter - Add Cat'
        });

    } catch (error) {
        console.log(errorHandler(error).message);
        res.redirect('/');
    }
});

addCatController.post('/', upload.single('upload'), async (req, res) => {
    const userInput = req.body;
    try {
        if (req.file?.originalname) {
            userInput.imagePath = `/static/images/${req.file.originalname}`;
        }

        const data = Object.fromEntries(Object.entries(userInput).map(([k, v]) => [k, v.trim()]));
        const newCat = await addNewCat(data);
        res.redirect('/');
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('addCat', {
            userInput,
            allBreeds: state.allBreeds,
            title: 'Cat Shelter - Add Cat'
        });
    }
});

module.exports = { addCatController };