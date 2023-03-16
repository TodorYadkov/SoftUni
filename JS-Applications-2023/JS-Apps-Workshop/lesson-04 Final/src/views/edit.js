import { editRecipe, getRecipeById } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (recipe, editFn) => ctx.html`
<section id="create">
    <article>
        <h2>Edit Recipe</h2>
        <form @submit=${editFn} id="editForm">
            <label>Name: <input type="text" name="name" placeholder="Recipe name" .value=${recipe.name}></label>
            <label>Image: <input type="text" name="img" placeholder="Image URL" .value=${recipe.img}></label>
            <label class="ml">Ingredients: <textarea name="ingredients"
                    placeholder="Enter ingredients on separate lines"
                    .value=${recipe.ingredients.join('\n')}></textarea></label>
            <label class="ml">Preparation: <textarea name="steps"
                    placeholder="Enter preparation steps on separate lines"
                    .value=${recipe.steps.join('\n')}></textarea></label>
            <input type="submit" value="Save Changes">
        </form>
    </article>
</section>`;

export async function setupEdit(context, recipeId) {
    ctx = context;
    const recipe = await getRecipeById(recipeId);

    ctx.render(editTemplate(recipe, editFn));

    async function editFn(event) {
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

        await editRecipe(recipeId, body);
        form.reset();
        ctx.page.redirect(`/catalog/${recipeId}`);
    }
}