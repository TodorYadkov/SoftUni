import { sectionsYears } from './years.js';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function getMonth(event, year) {
    let selectedMonth = '';
    if (event.target.tagName === 'TD') {
        selectedMonth = event.target.firstElementChild.textContent;
    } else if (event.target.tagName === 'DIV') {
        selectedMonth = event.target.textContent;
    }

    if (!selectedMonth) {
        return;
    }

    sectionsYears[year].style.display = 'none';
    const sectionDays = document.getElementById(`month-${year}-${months.indexOf(selectedMonth) + 1}`);
    sectionDays.style.display = 'block';
    sectionDays.addEventListener('click', (e) => backToMonths(e, sectionDays, year));
}

function backToMonths(event, sectionDays, year) {
    if (event.target.tagName === 'CAPTION') {
        sectionDays.style.display = 'none';
        sectionsYears[year].style.display = 'block';
    }
}