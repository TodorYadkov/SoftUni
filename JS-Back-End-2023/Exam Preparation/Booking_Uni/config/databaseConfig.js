const mongoose = require('mongoose');
const { CONNECTION_STR_DB, nameDB } = require('./environment.js');

module.exports = async () => {
    try {
        await mongoose.connect(CONNECTION_STR_DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`Database ${nameDB} is connected!`);
    } catch (error) {
        console.error(`Error initialiazing database ${nameDB}`);
        console.error(error.message);
        process.exit(1);
    }
};