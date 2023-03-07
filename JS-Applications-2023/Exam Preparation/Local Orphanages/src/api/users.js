import { get, post } from './api.js';

export function userLogin(data) {
    return post('/users/login', data);
}

export function userRegister(data) {
    return post('/users/register', data);
}

export function userLogout() {
    return get('/users/logout');
}