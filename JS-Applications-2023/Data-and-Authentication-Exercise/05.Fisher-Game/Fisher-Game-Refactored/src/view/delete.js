import { deleteCatch } from '../api/data.js';

let ctx = null;

export async function deleteCurrCatch(catchId, context) {
    ctx = context;
    await deleteCatch(catchId);
    ctx.page.redirect('/');
}