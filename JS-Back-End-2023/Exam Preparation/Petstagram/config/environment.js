const nameDB = 'petstagram';
const CONNECTION_STR = `mongodb://127.0.0.1:27017/${nameDB}`;
const serverPort = 3000;
const jwtSecret = '553ba1a62daee975a374c0b7d0d96caefeb1ba92';
const userCookieName = 'userData';
const roundsBcrypt = 10;

module.exports = {
    serverPort,
    jwtSecret,
    roundsBcrypt,
    CONNECTION_STR,
    nameDB,
    userCookieName,
};