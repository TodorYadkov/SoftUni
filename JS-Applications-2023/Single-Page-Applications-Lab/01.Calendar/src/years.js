import { getMonth } from './months.js';

export const sectionsYears = {
    years: document.getElementById('years'),
    '2020': document.getElementById('year-2020'),
    '2021': document.getElementById('year-2021'),
    '2022': document.getElementById('year-2022'),
    '2023': document.getElementById('year-2023'),
};

export function getYear(event) {
    let selsectedYear = '';
    if (event.target.tagName === 'TD') {
        selsectedYear = event.target.firstElementChild.textContent;
    } else if (event.target.tagName === 'DIV') {
        selsectedYear = event.target.textContent;
    }

    if (!selsectedYear) {
        return;
    }

    sectionsYears.years.style.display = 'none';
    sectionsYears[selsectedYear].style.display = 'block';
    sectionsYears[selsectedYear].addEventListener('click', backToYears);
    sectionsYears[selsectedYear].addEventListener('click', (e) => getMonth(e, selsectedYear));
}

function backToYears(event) {
    if (event.target.tagName === 'CAPTION') {
        sectionsYears.years.style.display = 'block';
        sectionsYears[event.target.textContent].style.display = 'none';
    }
}