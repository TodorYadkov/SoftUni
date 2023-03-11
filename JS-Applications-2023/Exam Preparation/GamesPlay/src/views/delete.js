import { deleteGame } from '../api/data.js';

let ctx = null;

export async function removeProduct(context) {
    ctx = context;
    const gameId = ctx.params.id;
    await deleteGame(gameId);

    ctx.page.redirect('/');
} 