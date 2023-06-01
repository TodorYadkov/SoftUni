const nameDB = 'CryptoTrade';
const CONNECTION_STR = `mongodb://127.0.0.1:27017/${nameDB}`;
const serverPort = 3000;
const jwtSecret = 'DFHDFaswerq@#4ASDFvssd345hioA!@#$ASDF5ASF36asdfas234';
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