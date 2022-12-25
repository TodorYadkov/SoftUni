function focused() {
    const inputElement = document.querySelectorAll('input');

    for (let el of inputElement) {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur)
    }

    function onFocus(event) {
        event.target.parentElement.className = 'focused';
    }

    function onBlur(event) {
        event.target.parentElement.className = '';

    }
}