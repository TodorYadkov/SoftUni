import { deleteAlbum } from '../api/data.js';

let ctx = null;

export async function deleteCurrentAlbum(context) {
    ctx = context;
    const albumId = ctx.params.id;
    await deleteAlbum(albumId);
    ctx.page.redirect('/catalog');
}