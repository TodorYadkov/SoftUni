import { createRecipe } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const createTemplate = (createFn) => ctx.html`
<section id="create">
    <article>
        <h2>New Recipe</h2>
        <form @submit=${createFn} id="createForm">
            <label>Name: <input type="text" name="name" placeholder="Recipe name"></label>
            <label>Image: <input type="text" name="img" placeholder="Image URL"></label>
            <label class="ml">Ingredients: <textarea name="ingredients"
                    placeholder="Enter ingredients on separate lines"></textarea></label>
            <label class="ml">Preparation: <textarea name="steps"
                    placeholder="Enter preparation steps on separate lines"></textarea></label>
            <input type="submit" value="Create Recipe">
        </form>
    </article>
</section>`;

export function showCreate(context) {
    ctx = context;

    ctx.render(createTemplate(createFn));

    async function createFn(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        const body = {
            name: data.name,
            img: data.img,
            ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
            steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
        };

        for (const input in body) {
            if (body[input] === '') {
                return alertFnMessage('All fields are required!');
            }
        }

        await createRecipe(body);
        form.reset();
        ctx.page.redirect('/catalog');
    }
}

