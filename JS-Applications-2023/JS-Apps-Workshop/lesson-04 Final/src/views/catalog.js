import { getRecipeCount, getRecipes } from '../api/data.js';

let ctx = null;

const catalogTemplate = (recipes, page, pages, getNextPageRecipes) => ctx.html`
<section id="catalog">
    <header class="section-title">${pager(getNextPageRecipes, page, pages)}</header>
    ${recipes.map(recipePreview)}
    <footer class="section-title">${pager(getNextPageRecipes, page, pages)}</footer>
</section>`;

const recipePreview = (recipe) => ctx.html`
<a href="/catalog/${recipe._id}">
    <article class="preview">
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small"><img src="/${recipe.img}"></div>
    </article>
</a>`;

const pager = (getNextPageRecipes, page, pages) => ctx.html`
${page > 1 
    ? ctx.html`<a class="pager" href="javascript:void(0)" @click=${async () => await getNextPageRecipes(page - 1) }}>&lt; Prev</a>`
    : null}
Page ${page} of ${pages}
${page < pages 
    ? ctx.html`<a class="pager" href="javascript:void(0)" @click=${async () => await getNextPageRecipes(page +1)}>Next &gt;</a>` 
    : null}`;

export async function showCatalog(context) {
    ctx = context;

    const count = await getRecipeCount();
    const pages = Math.ceil(count / 5);
    await getNextPageRecipes();

    async function getNextPageRecipes(page = location.search.split('=')[1] || 1) {
        if (page > pages) {
            page = pages;
        };
        if (page <= 0) {
            page = 1;
        };
        if (isNaN(Number(page))) {
            page = 1;
        };

        history.pushState({},'',`?page=${page}`);
        const recipes = await getRecipes(page);
        ctx.render(catalogTemplate(recipes, page, pages, getNextPageRecipes));
    }
}