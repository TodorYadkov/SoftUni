import { get, post } from './api.js';

export async function userLogin(data) {
    return post('/users/login', data);
}

export async function userRegister(data) {
    return post('/users/register', data);
}

export async function userLogout() {
    return get('/users/logout');
} 

