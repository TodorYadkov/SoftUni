import { register } from '../api/user.js';

let ctx = null;
const section = document.getElementById('register');
const form = section.querySelector('form');
form.addEventListener('submit', submitRegister);

export function showRegister(context) {
    ctx = context;
    ctx.showSection(section);
}

async function submitRegister(event) {
    event.preventDefault();
    const { email, password, repeatPassword } = Object.fromEntries(new FormData(form));

    if (email.length < 3) {
        alert('The email should be at least 3 characters long');
        return;
    }

    if (password.length < 3) {
        alert('The password should be at least 3 characters long');
        return;
    }

    if (password !== repeatPassword) {
        alert('The repeat password should be equal to the password');
        return;
    }

    await register(email, password);
    form.reset();
    ctx.navUpdate();
    ctx.goTo('/catalog');
}