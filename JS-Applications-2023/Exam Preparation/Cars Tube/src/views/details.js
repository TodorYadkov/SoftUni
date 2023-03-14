import { getCarById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (carDetails, isOwner) => ctx.html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${carDetails.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${carDetails.brand}</li>
            <li><span>Model:</span>${carDetails.model}</li>
            <li><span>Year:</span>${carDetails.year}</li>
            <li><span>Price:</span>${carDetails.price}$</li>
        </ul>
        <p class="description-para">${carDetails.description}</p>
        ${isOwner !== false 
            ? ctx.html`
                <div class="listings-buttons">
                    <a href="/edit/${carDetails._id}" class="button-list">Edit</a>
                    <a href="/delete/${carDetails._id}" class="button-list">Delete</a>
                </div>`
            : null}
    </div>
</section>
`;

export async function showDetails(context) {
    ctx = context;
    const carId = ctx.params.id;
    const carDetails = await getCarById(carId);
    const isOwner = ctx.userData?._id === carDetails._ownerId;
    ctx.render(detailsTemplate(carDetails, isOwner));
}