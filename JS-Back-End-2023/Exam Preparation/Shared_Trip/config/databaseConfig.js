const mongoose = require('mongoose');
const { nameDB, connectionStrDB } = require('./environment');

module.exports = async (app) => {
    try {
        mongoose.connect(connectionStrDB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`Successfully connecting to database ${nameDB}`);
    } catch (error) {
        console.error(`Error initialize databse ${nameDB}`);
        console.error(error.message);
        process.exit(1);
    }
};