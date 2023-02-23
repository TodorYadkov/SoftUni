import { getBooks } from './getBooks.js';

const endPoint = 'jsonstore/collections/books/';

export function deleteBook(ctx, id) {
    ctx.api.delete(endPoint + id);
}