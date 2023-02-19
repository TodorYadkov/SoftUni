import { login } from '../api/user.js';

let ctx = null;
const section = document.getElementById('login');
const form = section.querySelector('form');
form.addEventListener('submit', submitLogin);
// Add event listener on <a> tag to redirect to register page
section.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    ctx.goTo('/register');
});

export function showLogin(context) {
    ctx = context;
    ctx.showSection(section);
}

async function submitLogin(event) {
    event.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(form));
    await login(email, password);
    form.reset();
    ctx.navUpdate();
    ctx.goTo('/catalog');
}