import { userLogout } from './api/users.js';
import { html, render, page } from './lib.js';
import { getSessionStorageData, removeSessionStorageData } from './util.js';
import { catalogShow } from './views/catalog.js';
import { createShow } from './views/create.js';
import { deleteProduct } from './views/delete.js';
import { detailsShow } from './views/details.js';
import { editShow } from './views/edit.js';
import { homeShow } from './views/home.js';
import { loginShow } from './views/login.js';
import { registerShow } from './views/register.js';
import { searchShow } from './views/search.js';

const mainElement = document.querySelector('main');
document.getElementById('logout-btn').addEventListener('click', () => {
    userLogout();
    removeSessionStorageData();
    updateNav();
    page.redirect('/catalog');
});

// Middleware
page(decorateContext);

page('index.html', '/');
page('/', homeShow);
page('/catalog', catalogShow);
page('/catalog/:productId', detailsShow);
page('/edit/:productId', editShow);
page('/delete/:productId', deleteProduct);
page('/search', searchShow);
page('/create', createShow);
page('/login', loginShow);
page('/register', registerShow);

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
// Display current page
function customRender(template) {
    render(template, mainElement);
}

function updateNav() {
    const userData = getSessionStorageData();
    const user = document.querySelector('nav .user');
    const guest = document.querySelector('nav .guest');

    if (userData) {
        user.style.display = '';
        guest.style.display = 'none';
    } else {
        user.style.display = 'none';
        guest.style.display = '';
    }
}