import { getAlbumsById, updateAlbum } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (album, onEdit) => ctx.html`
    <section class="editPage">
        <form @submit=${onEdit}>
            <fieldset>
                <legend>Edit Album</legend>
                <div class="container">
                    <label for="name" class="vhide">Album name</label>
                    <input id="name" name="name" class="name" type="text" .value="${album.name}">
                    <label for="imgUrl" class="vhide">Image Url</label>
                    <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value="${album.imgUrl}">
                    <label for="price" class="vhide">Price</label>
                    <input id="price" name="price" class="price" type="text" .value="${album.price}">
                    <label for="releaseDate" class="vhide">Release date</label>
                    <input id="releaseDate" name="releaseDate" class="releaseDate" type="text"
                        .value="${album.releaseDate}">
                    <label for="artist" class="vhide">Artist</label>
                    <input id="artist" name="artist" class="artist" type="text" .value="${album.artist}">
                    <label for="genre" class="vhide">Genre</label>
                    <input id="genre" name="genre" class="genre" type="text" .value="${album.genre}">
                    <label for="description" class="vhide">Description</label>
                    <textarea name="description" class="description" rows="10" cols="10" .value="${album.description}"></textarea>
                        <button class=" edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`;

export async function showEdit(context) {
    ctx = context;
    const albumId = ctx.params.id;
    const albumToEdit = await getAlbumsById(albumId);
    ctx.render(editTemplate(albumToEdit, onEdit));

    async function onEdit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = Object.fromEntries(new FormData(form));;
        for (const input in formData) {
            if (formData[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }

            formData[input] = formData[input].trim();
        }

        const { name, imgUrl, price, releaseDate, artist, genre, description } = formData;
        await updateAlbum(albumId, { name, imgUrl, price, releaseDate, artist, genre, description });
        form.reset();
        ctx.page.redirect(`/catalog/${albumId}`);
    }
}