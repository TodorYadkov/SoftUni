import * as api from './api.js';

export async function loginUser(email, password) {
    return api.post('/users/login', { email, password });
}

export async function registerUser(email, password) {
    return api.post('/users/register', { email, password });
}

export async function logoutUser() {
    return api.get('/users/logout');
}