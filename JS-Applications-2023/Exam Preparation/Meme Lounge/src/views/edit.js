import { getMeme, updateMeme } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (meme, onEdit) => ctx.html`
<section id="edit-meme">
    <form @submit=${onEdit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"
                .value=${meme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
`;

export async function showEdit(context, memeId) {
    ctx = context;

    const meme = await getMeme(memeId);
    ctx.render(editTemplate(meme, onEdit));

    async function onEdit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = Object.fromEntries(new FormData(form));
        const hasEmpty = Object.values(formData).some(i => i === '');
        if (hasEmpty) {
            alertFnMessage('All fields are required!');
            return;
        }

        const { title, description, imageUrl } = formData;
        await updateMeme(memeId, title, description, imageUrl);
        form.reset();
        ctx.page.redirect(`/catalog/${memeId}`);
    }
}