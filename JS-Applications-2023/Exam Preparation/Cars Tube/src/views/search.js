import { searchCarByYear } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const searchTemplate = (onSearch, foundCars) => ctx.html`
<section id="search-cars">
            <h1>Filter by year</h1>
            <div @click=${onSearch} class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list">Search</button>
            </div>
            ${foundCars !== undefined 
        ? ctx.html`
            <h2>Results:</h2>
            <div class="listings">
                ${foundCars.length === 0 
                    ? ctx.html`<p class="no-cars"> No results.</p>`
                    : foundCars.map(searctResultCard)} 
            </div>` 
        : null}             
</section>
`;

const searctResultCard = (car) => ctx.html`
<div class="listing">
<div class="preview">
    <img src="${car.imageUrl}">
</div>
<h2>${car.brand} ${car.model}</h2>
<div class="info">
    <div class="data-info">
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price} $</h3>
    </div>
    <div class="data-buttons">
        <a href="/catalog/${car._id}" class="button-carDetails">Details</a>
    </div>
</div>
</div>`;

export function showSearch(context) {
    ctx = context;
    ctx.render(searchTemplate(onSearch));

    async function onSearch(event) {
        if (event.target.tagName === 'BUTTON') {
            const userInput = document.getElementById('search-input').value.trim();
            if (userInput === '') {
                alertFnMessage('The search field cannot be empty!');
                return;
            }

            const foundCars = await searchCarByYear(userInput);
            ctx.render(searchTemplate(onSearch, foundCars));
        }
    }
}