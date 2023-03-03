import { deleteAlbum } from '../api/data.js';

let ctx = null;

export async function removeProduct(context) {
    ctx = context;
    const albumId = ctx.params.productId;
    await deleteAlbum(albumId);

    ctx.page.redirect('/catalog');
}