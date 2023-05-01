const serverPort = 3000;
const nameDB = 'realEstateAgency';
const connectionStrDB = `mongodb://127.0.0.1:27017/${nameDB}`;
const jwtSecret = 'ASDFkGF3@#$5SDG@#%ghJtriT235sgmMDFH3425asf';
const bcryptRounds = 10;
const userCookieName = 'userData';

module.exports = {
    serverPort,
    nameDB,
    connectionStrDB,
    jwtSecret,
    bcryptRounds,
    userCookieName,
};