function lockedProfile() {
    const buttons = document.querySelectorAll('.profile button');

    for (let button of buttons) {
        button.addEventListener('click', actionFn);
    }

    function actionFn(event) {
        const radioButton = event.target.parentElement.querySelector('input[type="radio"]').checked;
        const hidenElement = event.target.parentElement.querySelector('div');
        const buttonText = event.target;

        if (buttonText.textContent === 'Show more' && radioButton === false) {
            hidenElement.style.display = 'block';
            buttonText.textContent = 'Hide it';

        } else if (buttonText.textContent === 'Hide it' && radioButton === false) {
            hidenElement.style.display = 'none';
            buttonText.textContent = 'Show more';
        }
    }
}