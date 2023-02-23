import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showHome } from './src/homePage.js';
import * as api from './src/api.js';


const context = {
    html,
    render,
    api,
    showHome,
};

showHome(context);