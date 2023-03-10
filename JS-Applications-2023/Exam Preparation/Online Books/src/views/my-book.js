import { getMyBooks } from '../api/data.js';

let ctx = null;

const myBookTemplate = (myBooks) => ctx.html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <ul class="my-books-list">
    ${myBooks.length === 0 
            ? ctx.html` <p class="no-books">No books in database!</p>`
            : myBooks.map(bookCard)}
    </ul>
</section>
`;

const bookCard = (book) => ctx.html`
 <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/catalog/${book._id}">Details</a>
 </li>
 `;

export async function showMyBook(context) {
    ctx = context;
    const userId = ctx.userData?._id;
    const myBooks = await getMyBooks(userId);
    ctx.render(myBookTemplate(myBooks));
} 