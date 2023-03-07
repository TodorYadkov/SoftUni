import { getAllDonationsCount, getDonationForSpecificUser, getPostById, makeDonation } from '../api/data.js';

let ctx = null;

const detailsTemplate = (post, countDonations, isOwner, isLogged, isAUserDonation) => ctx.html`
<section id="details-page">
    <h1 class="title">Post Details</h1>
    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${post.imageUrl}" alt="${post.imageUrl}" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${countDonations}</p>
                ${checkConditions(isOwner, isLogged, isAUserDonation, post._id)}
            </div>
        </div>
    </div>
</section>
`;

function checkConditions(isOwner, isLogged, isAUserDonation, postId) {
    if (isLogged) {
        if (isOwner) {
            return ctx.html`
            <div class="btns">
                <a href="/edit/${postId}" class="edit-btn btn">Edit</a>
                <a href="/delete/${postId}" class="delete-btn btn">Delete</a>
            </div>
            `;
        } else {
            return isAUserDonation === false
                ? ctx.html`
                    <div class="btns">
                        <a @click=${() => donation(postId)} href="javascript:void(0)" class="donate-btn btn">Donate</a>
                    </div>`
                : '';
        }
    }
    return '';
}

async function donation(postId) {
    const [_, countDonations] = await Promise.all([
        makeDonation(postId),
        getAllDonationsCount(postId)
    ]);
    
    document.querySelector('.donate-Item').textContent = `Donate Materials: ${countDonations}`;
    document.querySelector('.btns').remove();
}

export async function detailsShow(context) {
    ctx = context;
    const postId = ctx.params.id;
    const userData = ctx.userData();
    const [postDetails, countDonations] = await Promise.all([
        getPostById(postId),
        getAllDonationsCount(postId)
    ]);

    let isAUserDonation = false;
    if (userData) {
        const userDonationCount = await getDonationForSpecificUser(postId, userData._id);
        isAUserDonation = userDonationCount > 0;
    }

    const isOwner = userData?._id === postDetails._ownerId;
    const isLogged = userData !== null;
    ctx.render(detailsTemplate(postDetails, countDonations, isOwner, isLogged, isAUserDonation));
}