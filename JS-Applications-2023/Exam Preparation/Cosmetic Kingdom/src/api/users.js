import { get, post } from './api.js';

export async function userLogin(email, password) {
    return post('/users/login', { email, password });
}

export async function userRegister(email, password) {
    return post('/users/register', { email, password });
}

export async function userLogout() {
    return get('/users/logout');
}

