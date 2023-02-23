import { deleteBook } from './deleteBook.js';
import { editBook } from './editBook.js';

const endPoint = 'jsonstore/collections/books';

export async function getBooks(ctx) {
    const tableBody = document.querySelector('#table-body');
    const data = await ctx.api.get(endPoint);
    const allBooks = [];
    for (const book in data) {
        const id = book;
        const author = data[book].author;
        const title = data[book].title;
        allBooks.push(createBook(ctx, id, author, title));
    }

    ctx[allBooks];
    ctx.render(allBooks, tableBody);
}

function createBook(ctx, id, author, title) {
    return ctx.html`
    <tr>
        <td>${title}</td>
        <td>${author}</td>
        <td>
            <button id="${id}" @click="${() => editBook(ctx, id)}">Edit</button>
            <button id="${id}" @click="${() => deleteBook(ctx, id)}">Delete</button>
        </td>
    </tr>
`;
}
