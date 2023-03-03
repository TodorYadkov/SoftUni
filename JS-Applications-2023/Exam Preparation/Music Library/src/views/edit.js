import { getAlbumById, updateAlbum } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (album, updateFn) => ctx.html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${updateFn} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${album.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album} />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${album.release} />
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label} />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function showEdit(context) {
    ctx = context;
    const albumId = ctx.params.productId;
    const albumToEdit = await getAlbumById(albumId);
    ctx.render(editTemplate(albumToEdit, updateFn));

    async function updateFn(event) {
        event.preventDefault();
        const form = event.target;
        const data = Object.fromEntries(new FormData(form));

        for (let input in data) {
            if (data[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
        }

        await updateAlbum(albumId, data);
        form.reset();
        ctx.page.redirect(`/catalog/${albumId}`);
    }
}