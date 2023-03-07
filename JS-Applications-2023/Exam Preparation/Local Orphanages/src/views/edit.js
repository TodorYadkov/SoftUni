import { getPostById, updatePost } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (post, onEdit) => ctx.html`
<section id="edit-page" class="auth">
    <form @submit=${onEdit} id="edit">
        <h1 class="title">Edit Post</h1>
        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" .value=${post.title}>
        </article>
        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" .value=${post.description}>
        </article>
        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" .value=${post.imageUrl}>
        </article>
        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" .value=${post.address}>
        </article>
        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" .value=${post.phone}>
        </article>
        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
`;


export async function editShow(context) {
    ctx = context;
    const postId = ctx.params.id;
    const postInfo = await getPostById(postId);

    ctx.render(editTemplate(postInfo, onEdit));

    async function onEdit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const userInput = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
            address: formData.get('address'),
            phone: formData.get('phone'),
        };
        for (const input in userInput) {
            if (userInput[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            userInput[input] = userInput[input].trim();
        }

        await updatePost(postId, userInput);
        form.reset();
        ctx.page.redirect(`/catalog/${postId}`);
    }
}