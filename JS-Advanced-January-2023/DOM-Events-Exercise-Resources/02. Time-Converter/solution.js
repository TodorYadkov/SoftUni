function attachEventsListeners() {
    const buttons = document.querySelectorAll('input[type="button"]');
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    for (let button of buttons) {
        button.addEventListener('click', convertFn);
    }

    function convertFn(event) {
        const parentDivEl = event.target.parentElement;
        const userInput = parentDivEl.querySelector('input[type="text"]');
        const typeUnit = userInput.attributes.id.textContent;

        if (typeUnit === 'days') {
            hoursInput.value = Number(userInput.value) * 24;
            minutesInput.value = Number(hoursInput.value) * 60;
            secondsInput.value = Number(minutesInput.value) * 60;

        } else if (typeUnit === 'hours') {
            daysInput.value = Number(userInput.value) / 24;
            minutesInput.value = Number(userInput.value) * 60;
            secondsInput.value = Number(minutesInput.value) * 60;

        } else if (typeUnit === 'minutes') {
            hoursInput.value = Number(userInput.value) / 60;
            daysInput.value = Number(hoursInput.value) / 24;
            secondsInput.value = Number(userInput.value) * 60;

        } else if (typeUnit === 'seconds') {
            minutesInput.value = Number(userInput.value) / 60;
            hoursInput.value = Number(minutesInput.value) / 60;
            daysInput.value = Number(hoursInput.value) / 24;
        }
    }
}