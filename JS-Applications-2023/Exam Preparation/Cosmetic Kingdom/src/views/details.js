import { buyProduct, getAllBoughtForOneProductById, getAllBoughtForOneProductByIdForUser, getProductById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (productDetails, isOwner, hasBought, countBought) => ctx.html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${productDetails.imageUrl}" alt="${productDetails.imageUrl}" />
        <p id="details-title">${productDetails.name}</p>
        <p id="details-category">Category: <span id="categories">${productDetails.category}</span></p>
        <p id="details-price">Price: <span id="price-number">${productDetails.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">${countBought}</span> times.</h4>
                <span>${productDetails.description}</span>
            </div>
        </div>
        ${checkConditions(productDetails._id, isOwner, hasBought)}
    </div>
</section>`;

function checkConditions(productId, isOwner, hasBought) {
    if (ctx.userData !== null) {
        if (isOwner) {
            return ctx.html`
            <div id="action-buttons">
                <a href="/edit/${productId}" id="edit-btn">Edit</a>
                <a href="/delete/${productId}" id="delete-btn">Delete</a>
            </div>`;
        } else if (hasBought === false) {
            return ctx.html`
            <div id="action-buttons">
                <a @click=${async (e)=> {
                    e.preventDefault();
                    const [boughtProduct, countBought] = await Promise.all([
                        buyProduct(productId),
                        getAllBoughtForOneProductById(productId),
                    ]);
                    document.getElementById('buys').textContent = countBought;
                    document.getElementById('action-buttons').style.display = 'none';
                    }} href="#" id="buy-btn">Buy</a>
            </div>`;
        }
    }
    return '';
}

export async function showDetails(context) {
    ctx = context;
    const productId = ctx.params.productId;
    const [productDetails, countBought] = await Promise.all([
        getProductById(productId),
        getAllBoughtForOneProductById(productId),
    ]);

    let countForUserBought = 0;
    if (ctx.userData !== null) {
        countForUserBought = await getAllBoughtForOneProductByIdForUser(productId, ctx.userData._id);
    }

    const hasBought = countForUserBought > 0;
    const isOwner = ctx.userData?._id === productDetails._ownerId;
    ctx.render(detailsTemplate(productDetails, isOwner, hasBought, countBought));
}