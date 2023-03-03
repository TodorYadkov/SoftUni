import { get, post } from './api.js';

export async function userLogin(userInput) {
    return post('/users/login', userInput);
}

export async function userRegister(userInput) {
    return post('/users/register', userInput);
}

export async function userLogout() {
    return get('/users/logout');
}

