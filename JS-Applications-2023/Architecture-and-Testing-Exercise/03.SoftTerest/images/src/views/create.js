import { createIdea } from '../api/data.js';

let ctx = null;
const section = document.getElementById('create');
const form = section.querySelector('form');
form.addEventListener('submit', createFn);

export function showCreate(context) {
    ctx = context;
    ctx.showSection(section);
}

async function createFn(event) {
    event.preventDefault();
    const { title, description, imageURL } = Object.fromEntries(new FormData(form));
    if (title.length < 6) {
        alert('The title should be at least 6 characters long');
        return;
    }

    if (description.length < 10) {
        alert('The description should be at least 10 characters long');
        return;
    }

    if (imageURL.length < 5) {
        alert('The image should be at least 5 characters long');
        return;
    }
    // Send data to the server
    const data = { title, description, img: imageURL };
    const newIdea = await createIdea(data);

    form.reset();
    ctx.goTo('/catalog');
}