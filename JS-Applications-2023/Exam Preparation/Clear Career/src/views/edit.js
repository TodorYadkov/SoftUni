import { getOfferById, updateOffer } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (offer, updateFn) => ctx.html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${updateFn} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" .value=${offer.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url"
                .value=${offer.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category" .value=${offer.category} />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"
                .value=${offer.description}></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"
                .value=${offer.requirements}></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${offer.salary} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function showEdit(context) {
    ctx = context;
    const offerId = ctx.params.offerId;
    const offerToEdit = await getOfferById(offerId);
    ctx.render(editTemplate(offerToEdit, updateFn));

    async function updateFn(event) {
        event.preventDefault();
        const form = event.target;
        const data = Object.fromEntries(new FormData(form));

        for (let input in data) {
            if (data[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            data[input] = data[input].trim();
        }

        await updateOffer(offerId, data);
        form.reset();
        ctx.page.redirect(`/catalog/${offerId}`);
    }
}

