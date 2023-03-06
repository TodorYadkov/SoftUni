import { getSearchedShoes } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const searchTemplate = (onSearch, isLoggedIn, foundProducts) => ctx.html`
<section id="search">
    <h2>Search by Brand</h2>
    <form @submit=${onSearch} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
    <div id="search-container">
        ${foundProducts.length === 0
        ? ctx.html`<h2>There are no results found.</h2>`
        : ctx.html`
    <ul class="card-wrapper">
    ${foundProducts.map(p => shoeCard(p, isLoggedIn))}
    </ul>` }

    </div>
</section>
`;

const shoeCard = (shoe, isLoggedIn) => ctx.html`
<li class="card">
    <img src="${shoe.imageUrl}" alt="${shoe.imageUrl}" />
    <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    ${isLoggedIn !== false 
        ? ctx.html`<a class="details-btn" href="/catalog/${shoe._id}">Details</a>`
        : ''}
</li>
`;

export async function searchShow(context) {
    ctx = context;
    const isLoggedIn = ctx.userData !== null;
    let foundProducts = [];
    ctx.render(searchTemplate(onSearch, isLoggedIn, foundProducts));

    async function onSearch(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const queryStr = formData.get('search');
        if (queryStr === '') {
            alertFnMessage('The search field must not be empty!');
            return;
        }

        foundProducts = await getSearchedShoes(queryStr);
        ctx.render(searchTemplate(onSearch, isLoggedIn, foundProducts));
    }
}