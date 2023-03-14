export function alertFnMessage(message) {
    return alert(message);
}

export function setSessionStorageData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function getSessionStorageData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function removeSessionStorageData() {
    sessionStorage.removeItem('userData');
}