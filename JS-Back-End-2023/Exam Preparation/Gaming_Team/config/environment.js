const serverPort = 3000;
const nameDB = 'gamingTeam';
const CONNECTION_STR_DB = `mongodb://localhost:27017/${nameDB}`;
const jwtSecret = 'TRfdsa23#df!@fko^dfsgd&aslkn!@gfasf3NFDKh';
const userCookieName = 'userData';
const roundsBcrypt = 10;

module.exports = {
    serverPort,
    nameDB,
    CONNECTION_STR_DB,
    jwtSecret,
    userCookieName,
    roundsBcrypt,
};