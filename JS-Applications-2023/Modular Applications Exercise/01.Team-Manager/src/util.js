export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function removeUserData() {
    sessionStorage.removeItem('userData');
}

export function alertMessageFn(message, buttonText) {
    const notifier = document.querySelector('.overlay');
    const para = notifier.querySelector('.modal p');
    const button = notifier.querySelector('.action');
    para.textContent = message;
    button.textContent = buttonText;
    notifier.style.display = '';
}

export function hideAlertMessageFn() {
    const notifier = document.querySelector('.overlay');
    notifier.style.display = 'none';
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = Object.fromEntries(new FormData(form));
        
        callback(formData, form);
    };
}

