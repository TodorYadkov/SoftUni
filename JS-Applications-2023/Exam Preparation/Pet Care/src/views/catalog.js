import { getAllPets } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allPets) => ctx.html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${allPets.length === 0 
        ? ctx.html`<div><p class="no-pets">No pets in dashboard</p></div>`
        : allPets.map(cardPet)}      
    </div>
</section>
`;

const cardPet = (pet) => ctx.html`
<div class="animals-board">
    <article class="service-img">
        <img class="animal-image-cover" src="${pet.image}">
    </article>
    <h2 class="name">${pet.name}</h2>
    <h3 class="breed">${pet.breed}</h3>
    <div class="action">
        <a class="btn" href="/catalog/${pet._id}">Details</a>
    </div>
</div>
`;

export async function showCatalog(context) {
    ctx = context;

    const allPets = await getAllPets();
    ctx.render(catalogTemplate(allPets));
} 