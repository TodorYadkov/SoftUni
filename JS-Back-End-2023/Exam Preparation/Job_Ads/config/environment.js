const servePort = 3000;
const nameDB = 'jobAds';
const connectionStrDB = `mongodb://127.0.0.1:27017/${nameDB}`;
const jwtSecret = 'Kld#23Njmk$2jlfaoi1oijHUIH23ASF23!@';
const bcryptRounds = 10;
const userCookieName = 'userData';

module.exports = {
    servePort,
    nameDB,
    connectionStrDB,
    jwtSecret,
    bcryptRounds,
    userCookieName,
};