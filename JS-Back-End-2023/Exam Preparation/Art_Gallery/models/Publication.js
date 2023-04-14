const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLenght: [6, 'The title must be a minimum of 6 characters long']
    },
    'painting-tech': {
        type: String,
        required: true,
        maxLength: [15, 'The Painting techique should be a maximum of 15 characters longF']
    },
    picture: {
        type: String,
        required: true,
        validate: {
            validator: value => /^https?:\/\//i.test(value),
            message: props => `${props.value} is not a valid URL!`
        },
    },
    certificate: {
        type: String,
        required: true,
        enum: {
            values: ['Yes', 'No'],
            message: 'Please fill in Yes or No!',
        },
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    usersShared: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
});

// publicationSchema.pre('save', function (next) {
//     // Transform certificate to 'Yes' or 'No'
//     if (this.certificate) {
//         this.certificate = this.certificate.toLowerCase() === 'yes' ? 'Yes' : 'No';
//     }
//     next();
// });

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = { Publication };