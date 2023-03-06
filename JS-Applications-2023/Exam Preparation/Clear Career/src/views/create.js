import { createOffer } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function showCreate(context) {
    ctx = context;
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();
        const form = event.target;
        const inputData = Object.fromEntries(new FormData(form));

        for (let input in inputData) {
            if (inputData[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            inputData[input] = inputData[input].trim();
        }

        await createOffer(inputData);
        form.reset();
        ctx.page.redirect('/catalog');
    }
}