import { createGame } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
<section id="create-page" class="auth">
    <form @submit=${onCreate} id="create">
        <div class="container">
            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">
            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">
            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">
            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">
            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>
`;

export async function showCreate(context) {
    ctx = context;
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();
        const form = event.target;
        const inputData = Object.fromEntries(new FormData(form));

        for (let input in inputData) {
            if (inputData[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            inputData[input] = inputData[input].trim();
        }

        await createGame(inputData);
        form.reset();
        ctx.page.redirect('/');
    }
} 