import { getAllAlbums } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allAlbums) => ctx.html`
<section id="dashboard">
    ${allAlbums.length === 0 
        ? ctx.html` <h2>There are no albums added yet.</h2>` 
        : ctx.html`<h2>Albums</h2>
            <ul class="card-wrapper">
                ${allAlbums.map(cardProduct)}
            </ul>`}  
</section>
`;

const cardProduct = (product) => ctx.html`
<li class="card">
    <img src="${product.imageUrl}" alt="${product.imageUrl}" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${product.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${product.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${product.sales}</span></p>
    <a class="details-btn" href="/catalog/${product._id}">Details</a>
</li>
`;

export async function showCatalog(context) {
    ctx = context;
    const allAlbums = await getAllAlbums();
    ctx.render(catalogTemplate(allAlbums));
}