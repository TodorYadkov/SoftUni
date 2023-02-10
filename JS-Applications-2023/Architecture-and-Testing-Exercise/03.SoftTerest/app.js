import { initialize } from './src/router.js';

const init = initialize();
// Go to home page and set nav view
init.navUpdate();
init.goTo('/');
