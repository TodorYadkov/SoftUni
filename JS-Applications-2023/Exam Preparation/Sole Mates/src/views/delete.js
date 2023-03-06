import { deleteShoe } from '../api/data.js';

let ctx = null;

export async function deleteProduct(context) {
    ctx = context;
    const isDelete = confirm('Do you want to delete this item?');
    if (isDelete) {
        const productId = ctx.params.productId;
        await deleteShoe(productId);
        ctx.page.redirect('/catalog');
    }
}