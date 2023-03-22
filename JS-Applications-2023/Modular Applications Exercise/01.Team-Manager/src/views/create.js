import { addMember, approveMember, createTeam } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
<section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form id="create-form" class="main-form pad-large" @submit=${onCreate}>
            <div style="display: none" class="error">Error message.</div>
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team">
        </form>
    </article>
</section>
`;

export function showCreate(context) {
    ctx = context;
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate(userInput, form) {
        const errorEl = document.querySelector('.error');
        errorEl.style.display = 'none';

        for (const input in userInput) {
            if (userInput[input] === '') {
                errorEl.style.display = '';
                errorEl.textContent = 'All fields are required!', 'Try again';
                return;
            }
            if (input === 'name' && (userInput[input].length < 4)) {
                errorEl.style.display = '';
                errorEl.textContent = 'Name must be at least 4 characters long!', 'Try again';
                return;
            }
            if (input === 'description' && (userInput[input].length < 10)) {
                errorEl.style.display = '';
                errorEl.textContent = 'Description must be at least 10 characters long!', 'Try again';
                return;
            }

            userInput[input] = userInput[input].trim();
        }

        const { name, logoUrl, description } = userInput;
        const team = await createTeam({ name, logoUrl, description });
        const member = await addMember(team._id);
        await approveMember(member._id);
        form.reset();
        ctx.page.redirect(`/catalog/${team._id}`);
    }
}