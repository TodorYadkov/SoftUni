import { userLogout } from './api/users.js';
import { html, render, page } from './lib.js';
import { getSessionStorageData, removeSessionStorageData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showMyCatalog } from './views/my-catalog.js';
import { showRegister } from './views/register.js';

const main = document.querySelector('main');
document.getElementById('logout-btn').addEventListener('click', () => {
    userLogout();
    removeSessionStorageData();
    updateNav();
    page.redirect('/');
});

page(middleware);
page('/index.html', '/');
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/create', showCreate);
page('/my-catalog', showMyCatalog);
page('/login', showLogin);
page('/register', showRegister);

// Start application
page.start();
updateNav();

function middleware(ctx, next) {
    ctx.html = html;
    ctx.render = customRender;
    ctx.updateNav = updateNav;
    ctx.userData = getSessionStorageData();
    next();
}

function customRender(template) {
    render(template, main);
}

function updateNav() {
    const nav = document.querySelector('nav');
    const user = nav.querySelector('.user');
    const guest = nav.querySelector('.guest');
    const userData = getSessionStorageData();
    if (userData) {
        user.style.display = '';
        guest.style.display = 'none';
        user.querySelector('span').textContent = `Welcome, ${userData.email}`;
    } else {
        user.style.display = 'none';
        guest.style.display = '';
    }
}

