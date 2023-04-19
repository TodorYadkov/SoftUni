const serverPort = 3000;
const nameDB = 'bookingUni';
const CONNECTION_STR_DB = `mongodb://localhost:27017/${nameDB}`;
const jwtSecret = 'AsDfas3#df!fER%fsa&vdf@fsakAF';
const roundsBcrypt = 10;
const userCookieName = 'userData';

module.exports = {
    serverPort,
    nameDB,
    CONNECTION_STR_DB,
    jwtSecret,
    roundsBcrypt,
    userCookieName,
};