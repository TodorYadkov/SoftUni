const serverPort = 3000;
const nameDB = 'bookTalk';
const connectionStrDB = `mongodb://localhost:27017/${nameDB}`;
const userCookieName = 'userData';
const jwtSecret = 'HF2f@dasSAF8685VSDV2!ASDF#sd$sadf!$#5432SFA!';
const roundsBcrypt = 10;

module.exports = {
    serverPort,
    nameDB,
    connectionStrDB,
    userCookieName,
    jwtSecret,
    roundsBcrypt,
};