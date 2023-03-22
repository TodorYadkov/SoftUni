import { userLogout } from '../api/users.js';
import { removeUserData } from '../util.js';

let ctx = null;

export async function onLogout(context) {
    ctx = context;
    userLogout();
    removeUserData();
    ctx.page.redirect('/');
}