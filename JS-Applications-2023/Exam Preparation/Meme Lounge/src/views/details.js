import { getMeme } from '../api/data.js';
import { deleteCurrentMeme } from './delete.js';
import { showEdit } from './edit.js';

let ctx = null;

const detailsTemplate = (meme) => ctx.html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${ctx.isOwner 
                ? ctx.html`
                <a @click=${() => showEdit(ctx, meme._id)} class="button warning" href="javascript:void(0)">Edit</a>
                <button @click=${() => deleteCurrentMeme(ctx, meme._id)} class="button danger">Delete</button>`
                : null}
        </div>
    </div>
</section>
`;

export async function showDetails(context) {
    ctx = context;

    const memeId = ctx.params.id;
    const meme = await getMeme(memeId);
    ctx.isOwner = ctx.userData?._id === meme._ownerId;
    ctx.render(detailsTemplate(meme));
}