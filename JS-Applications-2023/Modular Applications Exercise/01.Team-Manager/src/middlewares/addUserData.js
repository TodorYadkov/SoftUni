import { getUserData } from '../util.js';

export function addUserData(ctx, next) {
    ctx.userData = getUserData();
    next();
};