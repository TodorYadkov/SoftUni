const mongoose = require('mongoose');
const { CONNECTION_STR_DB, nameDB } = require('./environment.js');

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STR_DB, {
            useUnifiedTopology: true, 
            useNewUrlParser: true,
        });
        console.log(`Successful connection to ${nameDB} database`);
    } catch (error) {
        console.error(`Error initialiazing database ${nameDB}`);
        console.error(error.message);
        process.exit(1);
    }
};