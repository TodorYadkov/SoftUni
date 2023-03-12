import { getEventById, updateEvent } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (theater, updateFn) => ctx.html`
<section id="editPage">
    <form @submit=${updateFn} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" .value="${theater.title}">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" .value="${theater.date}">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" .value="${theater.author}">
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description" .value="${theater.description}"
                placeholder="Description">To Kill a Mockingbird is a 2018 play based on the 1960 novel of the same name by Harper Lee, adapted for the stage by Aaron Sorkin. It opened on Broadway at the Shubert Theatre on December 13, 2018. The play is set to transfer to London's West End at the Gielgud Theatre in March 2022.</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
            .value="${theater.imageUrl}">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>
`;

export async function showEdit(context) {
    ctx = context;
    const theaterId = ctx.params.id;
    const teatherToEdit = await getEventById(theaterId);
    ctx.render(editTemplate(teatherToEdit, updateFn));

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

        await updateEvent(theaterId, data);
        form.reset();
        ctx.page.redirect(`/details/${theaterId}`);
    }
} 