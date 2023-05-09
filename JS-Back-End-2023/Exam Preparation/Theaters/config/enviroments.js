const serverPort = 3000;
const nameDB = 'theater';
const connectionStrDB = `mongodb://127.0.0.1/${nameDB}`;
const jwtSecret = 'PIjas@#asdf@#123SDAVoqwen~!@asfashjasdASERui123234hasfh';
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