const mongoose = require('mongoose');
const { CONNECTION_STR, nameDB } = require('./environment.js');

module.exports = async (app) => {
    try {
        // Connect to the DB
        await mongoose.connect(CONNECTION_STR, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        // Message if the connection is successful
        console.log(`Database ${nameDB} is connected!`);
    } catch (error) {
        // Message if the connection is unsuccessful
        console.error(`Error initializing database ${nameDB}`);
        console.error(error.message);
        // Force exit from the current process
        process.exit(1);
    }
};