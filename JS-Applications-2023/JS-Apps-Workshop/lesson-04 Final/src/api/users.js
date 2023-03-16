import { get, post } from './api.js';

const endpoints = {
    REGISTER: '/users/register',
    LOGIN: '/users/login',
    LOGOUT: '/users/logout'
};

export function userLogin({ email, password }) {
    return post(endpoints.LOGIN, { email, password });
}

export function userRegister({ email, password }) {
    return post(endpoints.REGISTER, { email, password });
}

export function userLogout() {
    return get(endpoints.LOGOUT);
}