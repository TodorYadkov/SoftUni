import { getAllProducts } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allProducts) => ctx.html`
<h2>Products</h2>
<section id="dashboard">
    ${allProducts.length == 0 
        ? ctx.html`<h2>No products yet.</h2>` 
        : ctx.html`${allProducts.map(cardProduct)}`
        }
</section>`;

const cardProduct = (product) => ctx.html`
<div class="product">
    <img src="${product.imageUrl}" alt="${product.imageUrl}" />
    <p class="title">${product.name}</p>
    <p><strong>Price:</strong><span class="price">${Number(product.price)}</span>$</p>
    <a class="details-btn" href="/catalog/${product._id}">Details</a>
</div>`;

export async function showCatalog(context) {
    ctx = context;

    const allProducts = await getAllProducts();
    ctx.render(catalogTemplate(allProducts));
}