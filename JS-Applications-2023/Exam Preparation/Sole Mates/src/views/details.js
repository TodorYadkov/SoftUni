import { getShoeById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (shoeDetails, isOwner) => ctx.html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="${shoeDetails.imageUrl}" alt="${shoeDetails.imageUrl}" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoeDetails.brand}</span></p>
            <p>Model: <span id="details-model">${shoeDetails.model}</span></p>
            <p>Release date: <span id="details-release">${shoeDetails.release}</span></p>
            <p>Designer: <span id="details-designer">${shoeDetails.designer}</span></p>
            <p>Value: <span id="details-value">${shoeDetails.value}</span></p>
        </div>
        ${isOwner 
            ? ctx.html`
            <div id="action-buttons">
                <a href="/edit/${shoeDetails._id}" id="edit-btn">Edit</a>
                <a href="/delete/${shoeDetails._id}" id="delete-btn">Delete</a>
            </div>`
            : ''}
    </div>
</section>
`;

export async function detailsShow(context) {
    ctx = context;
    const productId = ctx.params.productId;
    const shoeDetails = await getShoeById(productId);
    const isOwner = ctx.userData._id === shoeDetails._ownerId;
    ctx.render(detailsTemplate(shoeDetails, isOwner));
}