import { deleteBook } from '../api/data.js';

let ctx = null;

export async function removeProduct(context) {
    ctx = context;
    const bookId = ctx.params.id;
    await deleteBook(bookId);

    ctx.page.redirect('/catalog');
} 