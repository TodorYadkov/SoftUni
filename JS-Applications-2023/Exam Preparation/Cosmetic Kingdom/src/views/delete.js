import { deleteProduct } from '../api/data.js';

let ctx = null;

export async function removeProduct(context) {
    ctx = context;
    const productId = ctx.params.productId;
    await deleteProduct(productId);

    ctx.page.redirect('/catalog');
}