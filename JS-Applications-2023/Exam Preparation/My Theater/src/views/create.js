import { createEvent } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
<section id="createPage">
    <form @submit=${onCreate} class="create-form">
        <h1>Create Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" placeholder="Description"></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
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

        await createEvent(inputData);
        form.reset();
        ctx.page.redirect('/');
    }
} 