import { removeSessionStorageData, setSessionStorageData } from '../util.js';
import { get, post } from './api.js';

const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function userLogin(data) {
    const userData = await post(endPoints.login, data);
    setSessionStorageData(userData);
}

export async function userRegister(data) {
    const userData = await post(endPoints.register, data);
    setSessionStorageData(userData);
}

export async function userLogout() {
    await get(endPoints.logout);
    removeSessionStorageData();
}