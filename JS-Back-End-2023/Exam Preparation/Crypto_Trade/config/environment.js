const serverPort = 3000;
const nameDB = 'cryptoTrade';
const connectionStrDB = `mongodb://127.0.0.1:27017/${nameDB}`;
const jwtSecret = 'SKr#4fahMO1@opaO$*7jnmIOm4390!@#$MJO$#<dsa$';
const roundcBcrypt = 10;
const userCookieName = 'userData';

module.exports = {
    serverPort,
    nameDB,
    connectionStrDB,
    jwtSecret,
    roundcBcrypt,
    userCookieName,
};