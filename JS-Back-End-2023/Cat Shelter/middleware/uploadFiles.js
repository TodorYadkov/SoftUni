const multer = require('multer');

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'static/images'); // Set the directory where the files will be saved
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original filename for the saved file
    }
});

// Create the multer middleware
const upload = multer({ storage: storage });

module.exports = upload;