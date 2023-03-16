import { getGameById, updateGame } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (gameToEdit, updateFn) => ctx.html`
<section id="edit-page" class="auth">
    <form @submit=${updateFn} id="edit">
        <div class="container">
            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value="${gameToEdit.title}">
            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value="${gameToEdit.category}">
            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value="${gameToEdit.maxLevel}">
            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value="${gameToEdit.imageUrl}">
            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value="${gameToEdit.summary}"></textarea>
            <input class="btn submit" type="submit" value="Edit Game">
        </div>
    </form>
</section>
`;

export async function showEdit(context) {
    ctx = context;
    const gameId = ctx.params.id;
    const gameToEdit = await getGameById(gameId);
    ctx.render(editTemplate(gameToEdit, updateFn));

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

        await updateGame(gameId, data);
        form.reset();
        ctx.page.redirect(`/catalog/${gameId}`);
    }
} 