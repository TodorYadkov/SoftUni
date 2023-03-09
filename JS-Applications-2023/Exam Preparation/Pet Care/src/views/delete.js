import { deletePet } from '../api/data.js';

let ctx = null;

export async function removeProduct(context) {
    ctx = context;
    const petId = ctx.params.id;
    await deletePet(petId);

    ctx.page.redirect('/');
} 