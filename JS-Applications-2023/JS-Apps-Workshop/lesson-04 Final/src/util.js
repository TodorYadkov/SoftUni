export function setSessionStoreData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function getSessionStoreData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function removeSessionStoreData() {
    sessionStorage.removeItem('userData');
}

export function alertFnMessage(message) {
    return alert(message);
}