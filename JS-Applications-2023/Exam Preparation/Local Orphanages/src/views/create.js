import { createPost } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
<section id="create-page" class="auth">
    <form @submit=${onCreate} id="create">
        <h1 class="title">Create Post</h1>
        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title">
        </article>
        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description">
        </article>
        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl">
        </article>
        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address">
        </article>
        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone">
        </article>
        <input type="submit" class="btn submit" value="Create Post">
    </form>
</section>
`;


export async function createShow(context) {
    ctx = context;
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const userInput = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
            address: formData.get('address'),
            phone: formData.get('phone'),
        };
        for (const input in userInput) {
            if (userInput[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            userInput[input] = userInput[input].trim();
        }

        await createPost(userInput);
        form.reset();
        ctx.page.redirect('/catalog');
    }
}