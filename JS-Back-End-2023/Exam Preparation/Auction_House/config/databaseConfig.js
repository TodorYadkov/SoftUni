const mongoose = require('mongoose');
const { nameDB, connectionStrDB } = require('./environment.js');

module.exports = async (app) => {
    try {
        mongoose.connect(connectionStrDB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`Successfully connected to the ${nameDB} database`);
    } catch (error) {
        console.log(`Error to initialize database ${nameDB}`);
        console.error(error.message);
        process.exit(1);
    }
};