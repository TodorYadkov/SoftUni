const mongoose = require('mongoose');
const { nameDB, connectionStrDB } = require('./environments');

module.exports = async (app) => {
    try {
        mongoose.connect(connectionStrDB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`Successfully connected to ${nameDB} database`);
    } catch (error) {
        console.log(`Error initalize ${nameDB} database`);
        console.error(error.message);
        process.exit(1);
    }
};