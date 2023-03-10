import { getBookById, updateBook } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (book, updateFn) => ctx.html`
<section id="edit-page" class="edit">
    <form @submit=${updateFn} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" .value="${book.title}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description" .value="${book.description}">Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ...</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value="${book.imageUrl}">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value="${book.type}">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`;

export async function showEdit(context) {
    ctx = context;
    const bookId = ctx.params.id;
    const bookToEdit = await getBookById(bookId);
    ctx.render(editTemplate(bookToEdit, updateFn));

    async function updateFn(event) {
        event.preventDefault();
        const form = event.target;
        const data = Object.fromEntries(new FormData(form));

        for (let input in data) {
            if (data[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            data[input] = data[input].trim();
        }

        await updateBook(bookId, data);
        form.reset();
        ctx.page.redirect(`/catalog/${bookId}`);
    }
}