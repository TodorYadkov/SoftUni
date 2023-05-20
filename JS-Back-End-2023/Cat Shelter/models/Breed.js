const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
    breed: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'Breed must be at least 3 characters long'],
        collation: {
            locale: 'en',
            strength: 2,
        }
    }
});

const Breed = mongoose.model('Breed', breedSchema);

module.exports = { Breed };