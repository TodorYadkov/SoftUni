import { get, post } from './api.js';

const endPoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
};

export function userLogin(email, password) {
    return post(endPoints.login, { email, password });
}

export function userRegister(username, email, password, gender) {
    return post(endPoints.register, { username, email, password, gender });
}

export function userLogout() {
    return get(endPoints.logout);
}