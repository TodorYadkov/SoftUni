const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, 'Name must be at least 3 characters long'],
    },
    description: {
        type: String,
        requird: true,
        minLength: [10, 'Description must be at least 10 characters long']
    },
    imagePath: {
        type: String,
        required: true,
        default: null,
    },
    hasShelter: {
        type: Boolean,
        required: true,
        default: false,
    },
    breed: {
        type: mongoose.Types.ObjectId,
        ref: 'Breed',
        required: true,
        default: null,
    }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = { Cat };