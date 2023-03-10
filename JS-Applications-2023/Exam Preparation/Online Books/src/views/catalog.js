import { getAllBooks } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allBooks) => ctx.html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
    ${allBooks.length === 0 
        ? ctx.html`<p class="no-books">No books in database!</p>`
        : allBooks.map(cardBook)}
    </ul>
</section>
`;

const cardBook = (book) => ctx.html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/catalog/${book._id}">Details</a>
</li>
`;

export async function showCatalog(context) {
    ctx = context;

    const allBooks = await getAllBooks();
    ctx.render(catalogTemplate(allBooks));
} 