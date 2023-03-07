import { userLogout } from './api/users.js';
import { html, render, page } from './lib.js';
import { getSessionStorageData, removeSessionStorageData } from './util.js';
import { catalogShow } from './views/catalog.js';
import { createShow } from './views/create.js';
import { postDelete } from './views/delete.js';
import { detailsShow } from './views/details.js';
import { editShow } from './views/edit.js';
import { loginShow } from './views/login.js';
import { myPostShow } from './views/my-post.js';
import { registerShow } from './views/register.js';

const mainElement = document.querySelector('#main-content');
document.getElementById('logout-btn').addEventListener('click', () => {
    userLogout();
    removeSessionStorageData();
    updateNav();
    page.redirect('/catalog');
});

// Create middleware
page(decorateContext);
page('/index.html', '/');
page('/', '/catalog');
page('/catalog', catalogShow);
page('/catalog/:id', detailsShow);
page('/my-posts', myPostShow);
page('/create', createShow);
page('/login', loginShow);
page('/register', registerShow);
page('/edit/:id', editShow);
page('/delete/:id', postDelete);

// Apllication start here
page.start();
updateNav();

// Middleware
function decorateContext(ctx, next) {
    ctx.html = html;
    ctx.render = customRender;
    ctx.updateNav = updateNav;
    ctx.userData = getSessionStorageData;
    next();
}

function customRender(template) {
    render(template, mainElement);
}

function updateNav() {
    const userData = getSessionStorageData();
    const user = document.getElementById('user');
    const guest = document.getElementById('guest');
    if (userData) {
        user.style.display = '';
        guest.style.display = 'none';
    } else {
        user.style.display = 'none';
        guest.style.display = '';
    }
}