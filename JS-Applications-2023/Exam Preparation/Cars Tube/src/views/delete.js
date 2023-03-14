import { deleteCar } from '../api/data.js';

let ctx = null;

export async function deleteCurrentAlbum(context) {
    ctx = context;
    const carId = ctx.params.id;
    await deleteCar(carId);
    ctx.page.redirect('/catalog');
} 