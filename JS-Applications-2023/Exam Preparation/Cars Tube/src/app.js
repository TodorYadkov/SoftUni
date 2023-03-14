import { userLogout } from './api/users.js';
import { html, render, page } from './lib.js';
import { getSessionStorageData } from './util.js';
import { showCatalog } from './views/catalgo.js';
import { showCreate } from './views/create.js';
import { deleteCurrentAlbum } from './views/delete.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showProfile } from './views/profile.js';
import { showRegister } from './views/register.js';
import { showSearch } from './views/search.js';

const mainEl = document.getElementById('site-content');
document.getElementById('logout-btn').addEventListener('click', async () => {
    await userLogout();
    updateNav();
    page.redirect('/');
});

// Decorate context
page(decorateContext);
page('/index.htm', '/');
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/delete/:id', deleteCurrentAlbum);
page('/search', showSearch);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/profile', showProfile);

// Start app
page.start();
updateNav();

// Function middleware
function decorateContext(ctx, next) {
    ctx.html = html;
    ctx.render = customRender;
    ctx.updateNav = updateNav;
    ctx.userData = getSessionStorageData();
    next();
}

// Display page content
function customRender(template) {
    render(template, mainEl);
}

function updateNav() {
    const userData = getSessionStorageData();
    const nav = document.querySelector('nav');
    const user = nav.querySelector('#profile');
    const guest = nav.querySelector('#guest');
    if (userData) {
        user.querySelector('a').textContent = `Welcome ${getSessionStorageData().username}`;
        user.style.display = '';
        guest.style.display = 'none';
    } else {
        user.style.display = 'none';
        guest.style.display = '';
    }
}