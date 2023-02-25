export function setUserData(userData) {
    return sessionStorage.setItem('userData', JSON.stringify(userData));
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function clearUserData() {
    return sessionStorage.removeItem('userData');
}