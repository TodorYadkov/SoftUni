import { getRecent } from '../api/data.js';

let ctx = null;

const homeTemplate = (recentRecipes) => ctx.html`
<section id="home">
    <div class="hero">
        ${recentRecipes.isLoggedIn === false 
            ? ctx.html`<h2>Welcome to My Cookbook</h2>`
            : ctx.html`<h2>Welcome back ${ctx.userData.email}!</h2>`}
    </div>
    <header class="section-title">Recently added recipes</header>
    <div class="recent-recipes">
            ${recentRecipes.length === 0
           ? ctx.html`<p>No recipes added yet!</p>`
            : recentRecipes.map(cardRecipe)}
    </div>
    <footer class="section-title">
        <p>Browse all recipes in the <a href="/catalog">Catalog</a></p>
    </footer>
</section>`;

const cardRecipe = (recipe) => ctx.html`
        <div class="recent-space"></div>
        <a href="/catalog/${recipe._id}">
            <article class="recent">
                <div class="recent-preview"><img src=${recipe.img}></div>
                <div class="recent-title">${recipe.name}</div>
            </article>
        </a>`;


export async function showHome(context) {
    ctx = context;
    const recipes = await getRecent();
    recipes.isLoggedIn = ctx.userData !== null;
    ctx.render(homeTemplate(recipes));
}