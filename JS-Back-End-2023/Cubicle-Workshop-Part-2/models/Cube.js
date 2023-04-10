const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 100,

    },
    imageUrl: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: Number,
        require: true,
        min: 1,
        max: 6,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
});

cubeSchema.path('imageUrl').validate(function () {
    return this.imageUrl.startsWith('http');
}, 'Image should be a link!');

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = { Cube };