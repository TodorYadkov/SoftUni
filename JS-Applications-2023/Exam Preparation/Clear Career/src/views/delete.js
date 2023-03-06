import { deleteOffer } from '../api/data.js';

let ctx = null;

export async function removeOffer(context) {
    ctx = context;
    const offerId = ctx.params.offerId;
    await deleteOffer(offerId);

    ctx.page.redirect('/catalog');
}