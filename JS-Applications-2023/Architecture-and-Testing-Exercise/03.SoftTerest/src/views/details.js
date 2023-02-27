import { deleteIdea, ideaDetails } from '../api/data.js';

let ctx = null;
const section = document.getElementById('details');
// Add event listener on button [Delete] and delete the idea - delegetion
section.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        const ideaId = e.target.dataset.id;
        const data = deleteIdea(ideaId);
        ctx.goTo('/catalog');
    }
});

export async function showDetails(context, ideaId) {
    ctx = context;
    ctx.showSection(section);
    // Get user id
    const userId = JSON.parse(sessionStorage.getItem('userInfo'))?._id;
    // Get idea from the server
    const idea = await ideaDetails(ideaId);
    section.innerHTML = `<img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>`;
    // Check if the user is organizer of the idea
    if (userId === idea._ownerId) {
        const div = document.createElement('div');
        div.className = 'text-center';
        div.innerHTML = `<a data-id="${ideaId}" class="btn detb" href="/details">Delete</a>`;
        section.appendChild(div);
    }
}