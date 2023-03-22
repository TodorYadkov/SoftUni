import { page } from './lib.js';
import { addHtmlRender } from './middlewares/addHtmlRender.js';
import { addUserData } from './middlewares/addUserData.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showMyTeams } from './views/myTeams.js';
import { showRegister } from './views/register.js';

// Add middleware
page(addHtmlRender);
page(addUserData);

page('/index.html', '/');
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/catalog/:id/edit', showEdit);
page('/my-teams', showMyTeams);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);

// Start application
page.start();