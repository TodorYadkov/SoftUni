const nameDB = 'art-gallery';
const CONNECTION_STR = `mongodb://localhost:27017/${nameDB}`;
const serverPort = 3000;
const jwtSecret = 'ASD234hksa#hdf$uiw@er3!dj3hWe3i';
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