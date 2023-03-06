import { getAllShoes } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allShoes) => ctx.html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${allShoes.length === 0 
    ? ctx.html`<h2>There are no items added yet.</h2>`
    : ctx.html`
        <ul class="card-wrapper">
        ${allShoes.map(shoesCard)}
        </ul>` }
</section>
`;

const shoesCard = (shoe) => ctx.html`
<li class="card">
    <img src="${shoe.imageUrl}" alt="${shoe.imageUrl}" />
    <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    <a class="details-btn" href="/catalog/${shoe._id}">Details</a>
</li>
`;

export async function catalogShow(context) {
    ctx = context;
    const allShoes = await getAllShoes();
    ctx.render(catalogTemplate(allShoes));
}