import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logoutUser } from './api/users.js';
import { clearUserData, getUserData } from './util.js';
import { showHome } from './view/home.js';
import { showLogin } from './view/login.js';
import { showRegister } from './view/register.js';

const main = document.querySelector('main');
// Logout
document.getElementById('logout').addEventListener('click', () => {
    logoutUser();
    clearUserData();
    updateNav();
    page.redirect('/');
});

page(decorateContext);
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);

// Start application
page.start();
updateNav();

function decorateContext(ctx, next) {
    ctx.render = customRender;
    ctx.html = html;
    ctx.updateNav = updateNav;
    ctx.userData = getUserData();
    next();
}

function customRender(template) {
    render(template, main);
}

function updateNav() {
    const userData = getUserData();
    const nav = document.querySelector('nav');
    const spanWelcome = nav.querySelector('p span');
    const guestBtn = nav.querySelector('#guest');
    const userBtn = nav.querySelector('#user');

    if (userData) {
        guestBtn.style.display = 'none';
        userBtn.style.display = '';
        spanWelcome.textContent = userData.email;
    } else {
        guestBtn.style.display = '';
        userBtn.style.display = 'none';
        spanWelcome.textContent = 'guest';
    }
}