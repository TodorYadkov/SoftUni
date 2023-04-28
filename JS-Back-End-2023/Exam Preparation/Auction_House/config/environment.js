const serverPort = 3000;
const nameDB = 'auctionHouse';
const connectionStrDB = `mongodb://127.0.0.1:27017/${nameDB}`;
const jwtSecret = 'GDewr2#lmaASF%^safa@!#$SFGJRoaf#$%9KLMSADF';
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