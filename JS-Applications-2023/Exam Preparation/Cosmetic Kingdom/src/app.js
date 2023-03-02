import { userLogout } from './api/users.js';
import { html, render, page } from './lib.js';
import { getSessionStorageData, removeSessionStorageData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { removeProduct } from './views/delete.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

const main = document.querySelector('main');
document.querySelector('#logout-btn').addEventListener('click', async () => {
    await userLogout();
    removeSessionStorageData();
    updateNav();
    page.redirect('/catalog');
});

page(decorateContext);
page('index.html', '/');
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:productId', showDetails);
page('/create', showCreate);
page('/edit/:productId', showEdit);
page('/delete/:productId', removeProduct);
page('/login', showLogin);
page('/register', showRegister);

// Start application
page.start();
updateNav();

function decorateContext(ctx, next) {
    ctx.html = html;
    ctx.render = customRender;
    ctx.updateNav = updateNav;
    ctx.userData = getSessionStorageData();
    next();
}

function updateNav() {
    const userData = getSessionStorageData();
    const nav = document.querySelector('nav');
    const user = nav.querySelector('.user');
    const guest = nav.querySelector('.guest');
    if (userData) {
        user.style.display = '';
        guest.style.display = 'none';
    } else {
        user.style.display = 'none';
        guest.style.display = '';
    }
}

function customRender(template) {
    render(template, main);
}