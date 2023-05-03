const serverPort = 3000;
const nameDB = 'tutorials';
const connectionStrDB = `mongodb://127.0.0.1:27017/${nameDB}`;
const jwtSecret = 'SFioi#%^huiJO134*hihkjtrdASf&*hjgj76';
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