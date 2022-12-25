function validate() {
    const inputEmail = document.getElementById('email');
    inputEmail.addEventListener('change', onChange);
    // inputEmail.addEventListener('keypress', onChange);
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    function onChange(event) {
        let input = inputEmail.value;
        const match = input.match(pattern);

        if (match === null) {
            event.target.className = 'error';
        } else {
            event.target.className = '';
        }
    }
}