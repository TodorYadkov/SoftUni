import { getAllIdeas } from '../api/data.js';

let ctx = null;
const section = document.getElementById('dashboard-holder');
// Add eventListener - delegetion - get id of the idea and go to details
section.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        const ideaId = e.target.dataset.id;
        ctx.goTo('/details', ideaId);
    }
});

export async function showDashboard(context) {
    ctx = context;
    // Get all ideas from the server
    const ideas = await getAllIdeas();
    if (ideas.length === 0) {
        const h1 = document.createElement('h1');
        h1.textContent = 'No ideas yet! Be the first one :)';
        ctx.showSection(h1);
    } else {
        const fragment = document.createDocumentFragment();
        ideas.map(createCard).forEach(card => fragment.appendChild(card));
        section.replaceChildren(fragment);
        ctx.showSection(section);
    }

    function createCard(idea) {
        const user = JSON.parse(sessionStorage.getItem('userInfo'));
        const div = document.createElement('div');
        div.className = 'card overflow-hidden current-card details';
        div.style.width = '20rem';
        div.style.height = '18rem';
        div.innerHTML = `<div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}"
            alt="Card image cap">
            <a data-id="${idea._id}" class="btn" href="/details">Details</a>`;
            
        // if (user) {
        //     const a = document.createElement('a');
        //     a.innerHTML = `<a data-id="${idea._id}" class="btn" href="/details">Details</a>`;
        //     div.appendChild(a);
        // }

        return div;
    }
}