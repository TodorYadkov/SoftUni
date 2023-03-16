import { deleteRecipeById, getCommentsByRecipeId, getRecipeById } from '../api/data.js';
import { showComments } from './comments.js';
import { setupEdit } from './edit.js';

let ctx = null;

const detailsTemplate = (recipe, comments, onDelete, onEdit) => ctx.html`
<section id="details">
    ${recipeCard(recipe, onDelete, onEdit)}
    ${showComments(recipe, comments, ctx)}
</section>`;

const recipeCard = (recipe, onDelete, onEdit) => ctx.html`
<article>
    <h2>${recipe.name}</h2>
    <div class="band">
        <div class="thumb"><img src="/${recipe.img}"></div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(i => ctx.html`<li>${i}</li>`)}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${recipe.steps.map(s => ctx.html`<p>${s}</p>`)}
    </div>
    ${ctx.isOwner
    ? ctx.html`
    <div class="controls">
        <button @click=${onEdit}>\u2700 Edit</button>
        <button @click=${onDelete}>\u2716 Delete</button>
    </div>`
    : null}
</article>`;

export async function showDetails(context) {
    ctx = context;
    const recipeId = ctx.params.id;
    const [recipe, comments] = await Promise.all([
        getRecipeById(recipeId),
        getCommentsByRecipeId(recipeId),
    ]);

    const userId = ctx.userData?._id;
    ctx.isOwner = userId != undefined && recipe._ownerId == userId;

    ctx.render(detailsTemplate(recipe, comments, onDelete, onEdit));

    async function onDelete(recipe) {
        const confirmed = confirm(`Are you sure you want to delete ${recipe.name}?`);
        if (confirmed) {
            await deleteRecipeById(recipeId);
            ctx.render(ctx.html`
            <section id="details">
                <article>
                    <a href="/catalog">
                        <h2>Recipe deleted</h2>
                    </a>
                </article>
            </section>`);
        }
    }

    async function onEdit() {
        await setupEdit(ctx, recipeId);
    }
}
