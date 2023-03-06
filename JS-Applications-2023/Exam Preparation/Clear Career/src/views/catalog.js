import { getAllOffers } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allOffers) => ctx.html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${allOffers.length === 0 
    ? ctx.html`<h2>No offers yet.</h2>`
    : ctx.html`
        <ul class="card-wrapper">
        ${allOffers.map(cardProduct)}
        </ul>` }
</section>
`;

const cardProduct = (offer) => ctx.html`
<div class="offer">
    <img src="${offer.imageUrl}" alt="${offer.imageUrl}" />
    <p>
        <strong>Title: </strong><span class="title">${offer.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/catalog/${offer._id}">Details</a>
</div>
`;

export async function showCatalog(context) {
    ctx = context;

    const allOffers = await getAllOffers();
    ctx.render(catalogTemplate(allOffers));
}