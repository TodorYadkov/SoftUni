import { createBook } from './createBook.js';
import { getBooks } from './getBooks.js';

const body = document.querySelector('body');

export function showHome(ctx) {
    const templateHome = [];
    templateHome.push(ctx.html`
<button id="loadBooks" @click="${() => getBooks(ctx)}">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody id="table-body">
    </tbody>
</table>
`);

    templateHome.push(ctx.html`
<form id="add-form" @submit="${(e) => createBook(e, ctx)}">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>
`);
    ctx.render(templateHome, body);

    ctx['template'] = templateHome;
}
