const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: /^https?/g,
            message: 'Image url should be a link'
        }
    },
    description: {
        type: String,
        maxLength: 120,
        required: true,
    },
    cubes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cube',
    }]
});

accessorySchema.path('imageUrl').validate(function () {
    return this.imageUrl.startsWith('http');
}, 'Image should be a link!');

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = { Accessory };