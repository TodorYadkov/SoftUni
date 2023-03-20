const notification = document.querySelector('.notification');
const alertText = notification.querySelector('span');

export function setSessionStorageData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function getSessionStorageData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function removeSessionStorageData() {
    sessionStorage.removeItem('userData');
}

export function alertFnMessage(message) {
    notification.style.display = 'block';
    alertText.textContent = message;
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}