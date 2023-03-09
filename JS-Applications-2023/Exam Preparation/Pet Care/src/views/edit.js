import { getPetById, updatePet } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (pet, updateFn) => ctx.html`
<section id="editPage">
    <form @submit=${updateFn} class="editForm">
        <img src="${pet.image}">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value="${pet.name}">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value="${pet.breed}">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value="${pet.age}">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value="${pet.weight}">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value="${pet.image}">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`;

export async function showEdit(context) {
    ctx = context;
    const petId = ctx.params.id;
    const petToEdit = await getPetById(petId);
    ctx.render(editTemplate(petToEdit, updateFn));

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

        await updatePet(petId, data);
        form.reset();
        ctx.page.redirect(`/catalog/${petId}`);
    }
}

