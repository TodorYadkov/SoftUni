function attachEvents() {
    const URL_LOCATION = 'http://localhost:3030/jsonstore/forecaster/locations';
    const URL_TODAY = 'http://localhost:3030/jsonstore/forecaster/today/';
    const URL_UPCOMING = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    const input = document.getElementById('location');
    const btnSubmit = document.getElementById('submit');
    btnSubmit.addEventListener('click', showWeather);
    const outputs = {
        forecast: document.getElementById('forecast'),
        current: document.getElementById('current'),
        upcoming: document.getElementById('upcoming'),
    };
    const weatherSymbols = {
        '_Degrees': '&#176',
        'Partly sunny': '&#x26C5',
        Sunny: '&#x2600',
        Overcast: '&#x2601',
        Rain: '&#x2614',
    };
    const divCurrent = generateEl('div', '', outputs.current, { class: 'forecasts' });
    const divUpcoming = generateEl('div', '', outputs.upcoming, { class: 'forecast-info' });

    async function showWeather() {
        const userInput = input.value;
        input.value = '';
        outputs.forecast.style.display = 'inline';
        divCurrent.innerHTML = '';
        divUpcoming.innerHTML = '';

        try {
            // Get first promise
            const responseLocation = await fetch(URL_LOCATION);
            if (responseLocation.status !== 200) {
                throw new Error('Error');
            }
            // Get information for all locations
            const dataLocation = await responseLocation.json();
            // Get the searched city
            const wantedLocation = dataLocation.find(loc => loc.name === userInput);
            if (wantedLocation === undefined) {
                throw new Error('Error');
            }

            // Get second promise
            const responseOneDayForecast = await fetch(`${URL_TODAY}${wantedLocation.code}`);
            if (responseOneDayForecast.status !== 200) {
                throw new Error('Error');
            }
            // Get a forecast for one day
            const dataOneDayForecast = await responseOneDayForecast.json();

            // Get third promise
            const responseThreeDayForecast = await fetch(`${URL_UPCOMING}${wantedLocation.code}`);
            if (responseThreeDayForecast.status !== 200) {
                throw new Error('Error');
            }
            // Get a forecast for three days
            const dataThreeDayForecast = await responseThreeDayForecast.json();

            // Generate HTML elements
            // Current forecast
            const spanIcon = generateEl('span', '', divCurrent, { class: 'condition symbol' });
            spanIcon.innerHTML = weatherSymbols[dataOneDayForecast.forecast.condition];

            const spanCondition = generateEl('span', '', divCurrent, { class: 'condition' });
            const spanName = generateEl('span', dataOneDayForecast.name, spanCondition, { class: 'forecast-data' });
            const spanDegrees = generateEl('span', '', spanCondition, { class: 'forecast-data' });
            spanDegrees.innerHTML = `${dataOneDayForecast.forecast.low}${weatherSymbols['_Degrees']}/${dataOneDayForecast.forecast.high}${weatherSymbols['_Degrees']}`;
            const spanWeather = generateEl('span', dataOneDayForecast.forecast.condition, spanCondition, { class: 'forecast-data' });

            // Next three days
            for (const day of dataThreeDayForecast.forecast) {
                const spanUpcoming = generateEl('span', '', divUpcoming, { class: 'upcoming' });
                const spanIcon = generateEl('span', '', spanUpcoming, { class: 'symbol' });
                spanIcon.innerHTML = weatherSymbols[day.condition];

                const spanDegrees = generateEl('span', '', spanUpcoming, { class: 'forecast-data' });
                spanDegrees.innerHTML = `${day.low}${weatherSymbols['_Degrees']}/${day.high}${weatherSymbols['_Degrees']}`;
                const spanWeather = generateEl('span', day.condition, spanUpcoming, { class: 'forecast-data' });
            }

        } catch (error) {
            divCurrent.textContent = error.message;
        }
    }

    function generateEl(typeEl, content, parent, attributes) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attributes) {
            for (const [key, value] of Object.entries(attributes)) {
                el.setAttribute(key, value);
            }
        }

        parent.appendChild(el);
        return el;
    }
}

attachEvents();