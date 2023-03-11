import { getAllGames } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allGames) => ctx.html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${allGames.length === 0 
        ? ctx.html`<h3 class="no-articles">No articles yet</h3>`
        : allGames.map(cardGame)}
</section>
`;

const cardGame = (game) => ctx.html`
<div class="allGames">
    <div class="allGames-info">
        <img src="${game.imageUrl}">
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/catalog/${game._id}" class="details-button">Details</a>
    </div>
</div>
`;

export async function showCatalog(context) {
    ctx = context;

    const allGames = await getAllGames();
    ctx.render(catalogTemplate(allGames));
} 