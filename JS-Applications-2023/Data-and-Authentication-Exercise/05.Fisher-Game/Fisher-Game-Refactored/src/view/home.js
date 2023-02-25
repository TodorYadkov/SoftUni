import { createNewCatch, getAllCatches } from '../api/data.js';
import { deleteCurrCatch } from './delete.js';
import { updateCurrCatch } from './update.js';

let ctx = null;

const homeTemplate = (addNewCatch, onLoad, catches = []) => ctx.html`
${catches.length == 0 ? ctx.html`<div id="load-message">Click to get catches</div>` : ''}
<section id="home-view">
    <fieldset id="main">
            <legend>Catches</legend>
            <div id="catches">
                ${catches.map(obj => {
                    const isOwner = ctx.userData?._id == obj._ownerId;
                    return catchCard(obj, isOwner);
                })}
            </div>
        </fieldset>
    <aside>
        <button @click=${onLoad} class="load">Load</button>
        <form @submit=${addNewCatch} id="addForm">
            <fieldset>
                <legend>Add Catch</legend>
                <label>Angler</label>
                <input type="text" name="angler" class="angler" />
                <label>Weight</label>
                <input type="number" name="weight" class="weight" />
                <label>Species</label>
                <input type="text" name="species" class="species" />
                <label>Location</label>
                <input type="text" name="location" class="location" />
                <label>Bait</label>
                <input type="text" name="bait" class="bait" />
                <label>Capture Time</label>
                <input type="number" name="captureTime" class="captureTime" />
                <button ?disabled=${!ctx.userData} class="add">Add</button>
            </fieldset>
        </form>
    </aside>
</section>
`;

const catchCard = ({ _id, angler, bait, captureTime, location, species, weight }, isOwner) => ctx.html`
<legend>Catches</legend>
<div id="catches">
    <div class="catch">
        <label>Angler</label>
        <input type="text" class="angler" .value=${angler} ?disabled=${!isOwner}>
        <label>Weight</label>
        <input type="text" class="weight" .value=${weight} ?disabled=${!isOwner}>
        <label>Species</label>
        <input type="text" class="species" .value=${species} ?disabled=${!isOwner}>
        <label>Location</label>
        <input type="text" class="location" .value=${location} ?disabled=${!isOwner}>
        <label>Bait</label>
        <input type="text" class="bait" .value=${bait} ?disabled=${!isOwner}>
        <label>Capture Time</label>
        <input type="number" class="captureTime" .value=${captureTime} ?disabled=${!isOwner}>
        <button @click=${() => {
            const currCatch = document.querySelector(`.catch [data-catch-id='${_id}']`).parentElement;
            updateCurrCatch(_id, currCatch, ctx);
            }} data-catch-id="${_id}" class="update" ?disabled=${!isOwner}>Update</button>
        <button @click=${() => deleteCurrCatch(_id, ctx)} class="delete"
            ?disabled=${!isOwner}>Delete</button>
    </div>
</div>`;

export async function showHome(context) {
    ctx = context;
    if(ctx.userData) {
        const catches = await getAllCatches();
        ctx.render(homeTemplate(addNewCatch, onLoad, catches));
    } else {
        ctx.render(homeTemplate(addNewCatch, onLoad));
    }

    async function onLoad() {
        const catches = await getAllCatches();
        ctx.render(homeTemplate(addNewCatch, onLoad, catches));
    }

    function addNewCatch(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const userInputs = {
            angler: formData.get('angler'),
            weight: formData.get('weight'),
            species: formData.get('species'),
            location: formData.get('location'),
            bait: formData.get('bait'),
            captureTime: formData.get('captureTime'),
        };
        for (const input in userInputs) {
            if (userInputs[input] === ''
                || typeof Number(userInputs.weight) !== 'number'
                || typeof Number(userInputs.captureTime) !== 'number') {
                return;
            }

            userInputs[input] = userInputs[input].trim();
        }

        createNewCatch(userInputs);
        ctx.page.redirect('/');
        form.reset();
    }
}















/* import { createNewCatch, getAllCatches } from '../api/data.js';
import { deleteCurrCatch } from './delete.js';
import { updateCurrCatch } from './update.js';

let ctx = null;

const homeTemplate = (addNewCatch, onLoad, catches) => ctx.html`
${catches.length == 0 ? ctx.html`<div>Click to laod catches</div>` : ''}
<section id="home-view">
    ${catches.length !== 0 
        ? ctx.html`
        <fieldset id="main">
            <legend>Catches</legend>
            <div id="catches">
                ${catches.map(obj => {
                    const isOwner = ctx.userData?._id == obj._ownerId;
                    return catchCard(obj, isOwner);
                })}
            </div>
        </fieldset>`
        : ''} 
    <aside>
        <button @click=${onLoad} class="load">Load</button>
        <form @submit=${addNewCatch} id="addForm">
            <fieldset>
                <legend>Add Catch</legend>
                <label>Angler</label>
                <input type="text" name="angler" class="angler" />
                <label>Weight</label>
                <input type="number" name="weight" class="weight" />
                <label>Species</label>
                <input type="text" name="species" class="species" />
                <label>Location</label>
                <input type="text" name="location" class="location" />
                <label>Bait</label>
                <input type="text" name="bait" class="bait" />
                <label>Capture Time</label>
                <input type="number" name="captureTime" class="captureTime" />
                <button ?disabled=${!ctx.userData} class="add">Add</button>
            </fieldset>
        </form>
    </aside>
</section>
`;

const catchCard = ({ _id, angler, bait, captureTime, location, species, weight }, isOwner) => ctx.html`
<div class="catch">
    <label>Angler</label>
    <input type="text" class="angler" .value=${angler} ?disabled=${!isOwner}>
    <label>Weight</label>
    <input type="text" class="weight" .value=${weight} ?disabled=${!isOwner}>
    <label>Species</label>
    <input type="text" class="species" .value=${species} ?disabled=${!isOwner}>
    <label>Location</label>
    <input type="text" class="location" .value=${location} ?disabled=${!isOwner}>
    <label>Bait</label>
    <input type="text" class="bait" .value=${bait} ?disabled=${!isOwner}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" .value=${captureTime} ?disabled=${!isOwner}>
    <button @click=${() => {
        const currCatch = document.querySelector(`.catch [data-catch-id='${_id}']`).parentElement;
        updateCurrCatch(_id, currCatch, ctx);
        }} data-catch-id="${_id}" class="update" ?disabled=${!isOwner}>Update</button>
    <button @click=${() => deleteCurrCatch(_id, ctx)} class="delete"
        ?disabled=${!isOwner}>Delete</button>
</div>`;

export async function showHome(context) {
    ctx = context;
    let catches = [];
    ctx.render(homeTemplate(addNewCatch, onLoad, catches));

    async function onLoad() {
        catches = await getAllCatches();
        ctx.render(homeTemplate(addNewCatch, onLoad, catches));
    }

    async function addNewCatch(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const userInputs = {
            angler: formData.get('angler'),
            weight: formData.get('weight'),
            species: formData.get('species'),
            location: formData.get('location'),
            bait: formData.get('bait'),
            captureTime: formData.get('captureTime'),
        };
        for (const input in userInputs) {
            if (userInputs[input] === ''
                || typeof Number(userInputs.weight) !== 'number'
                || typeof Number(userInputs.captureTime) !== 'number') {
                return;
            }

            userInputs[input] = userInputs[input].trim();
        }

        createNewCatch(userInputs);
        ctx.page.redirect('/');
        form.reset();
    }
} */