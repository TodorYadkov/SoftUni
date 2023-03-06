import { createShoe } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
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
            brand: formData.get('brand'),
            model: formData.get('model'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            designer: formData.get('designer'),
            value: formData.get('value'),
        };

        for (const input in userInput) {
            if (userInput[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            userInput[input] = userInput[input].trim();
        }

        await createShoe(userInput);
        ctx.page.redirect('/catalog');
    }
}