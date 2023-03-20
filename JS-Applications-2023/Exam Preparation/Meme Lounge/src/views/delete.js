import { deleteMeme } from '../api/data.js';

let ctx = null;

export async function deleteCurrentMeme(context, memeId) {
    ctx = context;
    const didDelete = confirm('Are you sure you want to delete this meme?');
    if (didDelete) {
        await deleteMeme(memeId);
        ctx.page.redirect('/catalog');
    }
}