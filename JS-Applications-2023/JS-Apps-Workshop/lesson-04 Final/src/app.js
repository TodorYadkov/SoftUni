import { userLogout } from './api/users.js';
import { html, render, until, page } from './lib.js';
import { getSessionStoreData, removeSessionStoreData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

const mainEl = document.getElementById('main-content');
document.getElementById('logout-btn').addEventListener('click', () => {
    userLogout();
    removeSessionStoreData();
    updateNav();
    page.redirect('/');
});

page(middleware);
page('/index.html', '/');
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);

// App start
page.start();
updateNav();

function middleware(ctx, next) {
    ctx.html = html;
    ctx.render = customRender;
    ctx.until = until;
    ctx.updateNav = updateNav;
    ctx.userData = getSessionStoreData();
    next();
}

function customRender(template) {
    render(template, mainEl);
}

function updateNav() {
    const nav = document.querySelector('nav');
    const user = nav.querySelector('#user');
    const guest = nav.querySelector('#guest');
    const userData = getSessionStoreData();
    if (userData) {
        user.style.display = 'inline-block';
        guest.style.display = 'none';
    } else {
        user.style.display = 'none';
        guest.style.display = 'inline-block';
    }
}