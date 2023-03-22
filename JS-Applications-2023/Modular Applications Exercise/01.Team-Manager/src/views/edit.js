import { editTeam, getTeamById } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

const editTemplate = (onEdit) => ctx.html`
<section id="edit">
    <article class="narrow">
        <header class="pad-med">
            <h1>Edit Team</h1>
        </header>
        <form id="edit-form" class="main-form pad-large" @submit=${onEdit}>
            <div style="display: none" class="error">Error message.</div>
            <label>Team name: <input type="text" name="name" .value=${ctx.team.name}></label>
            <label>Logo URL: <input type="text" name="logoUrl" .value=${ctx.team.logoUrl}></label>
            <label>Description: <textarea name="description" .value=${ctx.team.description}></textarea></label>
            <input class="action cta" type="submit" value="Save Changes">
        </form>
    </article>
</section>
`;

export async function showEdit(context) {
    ctx = context;
    const teamId = ctx.params.id;
    ctx.team = await getTeamById(teamId);

    ctx.render(editTemplate(createSubmitHandler(onEdit)));

    async function onEdit(userInput, form) {
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
        await editTeam(teamId, { name, logoUrl, description });
        form.reset();
        ctx.page.redirect(`/catalog/${teamId}`);
    }
}