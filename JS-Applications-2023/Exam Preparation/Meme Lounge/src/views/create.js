import { createMeme } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
<section id="create-meme">
    <form @submit=${onCreate} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`;

export function showCreate(context) {
    ctx = context;
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = Object.fromEntries(new FormData(form));
        const hasEmpty = Object.values(formData).some(i => i === '');
        if (hasEmpty) {
            alertFnMessage('All fields are required!');
            return;
        }

        const { title, description, imageUrl } = formData;
        await createMeme(title, description, imageUrl);
        form.reset();
        ctx.page.redirect('/catalog');
    }
}