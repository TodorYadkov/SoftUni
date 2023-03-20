import { getAllMemes } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allMemes) => ctx.html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
    ${allMemes.length === 0 
        ? ctx.html`<p class="no-memes">No memes in database.</p>`
        : allMemes.map(cardMeme)}
    </div>
</section>
`;

const cardMeme = (meme) => ctx.html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${meme.title}</p>
                <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
            </div>
            <div id="data-buttons">
                <a class="button" href="/catalog/${meme._id}">Details</a>
            </div>
        </div>
    </div>
`;

export async function showCatalog(context) {
    ctx = context;

    const allMemes = await getAllMemes();
    ctx.render(catalogTemplate(allMemes));
}