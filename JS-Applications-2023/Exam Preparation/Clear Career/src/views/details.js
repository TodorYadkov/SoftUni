import { applyOffer, getAllApplyForOneOfferById, getAllAppliestForOneOfferByIdForUser, getOfferById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (offerDetails, isOwner, hasApply, countApplies) => ctx.html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${offerDetails.imageUrl}" alt="${offerDetails.imageUrl}" />
        <p id="details-title">${offerDetails.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offerDetails.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offerDetails.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offerDetails.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offerDetails.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${countApplies}</strong></p>
        ${checkConditions(offerDetails._id, isOwner, hasApply)}
</section>
`;

function checkConditions(offerId, isOwner, hasApply) {
    if (ctx.userData !== null) {
        if (isOwner) {
            return ctx.html`
            <div id="action-buttons">
                <a href="/edit/${offerId}" id="edit-btn">Edit</a>
                <a href="/delete/${offerId}" id="delete-btn">Delete</a>
            </div>`;
        } else if (hasApply === false) {
            return ctx.html`
            <div id="action-buttons">
                <a @click=${async (e)=> {
                    e.preventDefault();
                    const [applyOfferIncrement, countApplies] = await Promise.all([
                        applyOffer(offerId),
                        getAllApplyForOneOfferById(offerId),
                    ]);
                    document.getElementById('applications').textContent = countApplies;
                    document.getElementById('action-buttons').style.display = 'none';
                    }} href="#" id="apply-btn">Apply</a>
            </div>`;
        }
    }
    return '';
}

export async function showDetails(context) {
    ctx = context;
    const offerId = ctx.params.offerId;
    const [offerDetails, countOffers] = await Promise.all([
        getOfferById(offerId),
        getAllApplyForOneOfferById(offerId),
    ]);

    let countForUserApply = 0;
    if (ctx.userData !== null) {
        countForUserApply = await getAllAppliestForOneOfferByIdForUser(offerId, ctx.userData._id);
    }

    const hasApply = countForUserApply > 0;
    const isOwner = ctx.userData?._id === offerDetails._ownerId;
    ctx.render(detailsTemplate(offerDetails, isOwner, hasApply, countOffers));
}