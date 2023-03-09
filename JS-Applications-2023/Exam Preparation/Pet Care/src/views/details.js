import { addDonation, getAllDonation, getAllDonationForUser, getPetById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (petDetails, isOwner, didDonation, countDonation) => ctx.html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${petDetails.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${petDetails.name}</h1>
                <h3>Breed: ${petDetails.breed}</h3>
                <h4>Age: ${petDetails.age}</h4>
                <h4>Weight: ${petDetails.weight}</h4>
                <h4 class="donation">Donation: ${Number(countDonation) * 100}$</h4>
            </div>
            ${checkConditions(petDetails._id, isOwner, didDonation)}
        </div>
    </div>
</section>
`;

function checkConditions(petId, isOwner, didDonation) {
    if (ctx.userData !== null) {
        if (isOwner) {
            return ctx.html`
        <div class="actionBtn">
            <a href="/edit/${petId}" class="edit">Edit</a>
            <a href="/delete/${petId}" class="remove">Delete</a>
        </div>`;
        } else if (didDonation === false) {
            return ctx.html`
            <div class="actionBtn">
                <a @click=${async (e)=> {
                    e.preventDefault();
                    const [_, countDonation] = await Promise.all([
                        addDonation(petId),
                        getAllDonation(petId),
                    ]);
                    document.querySelector('.donation').textContent = `Donation: ${Number(countDonation) * 100}$`;
                    document.querySelector('.actionBtn').style.display = 'none';
                    }} href="javascript:void(0)" class="donate">Donate</a>
            </div>`;
        }
    }

    return '';
}

export async function showDetails(context) {
    ctx = context;
    const petId = ctx.params.id;
    const [petDetails, countDonation] = await Promise.all([
        getPetById(petId),
        getAllDonation(petId),
    ]);

    let countForUserDonation = 0;
    if (ctx.userData !== null) {
        countForUserDonation = await getAllDonationForUser(petId, ctx.userData._id);
    }

    const didDonation = countForUserDonation > 0;
    const isOwner = ctx.userData?._id === petDetails._ownerId;
    ctx.render(detailsTemplate(petDetails, isOwner, didDonation, countDonation));
} 