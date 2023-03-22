import { user } from './requests.js';
import { removeUserData, setUserData } from '../util.js';
import { methods } from './api.js';

export async function userLogin(data) {
    const userData = await methods.post(user.login, data);
    setUserData(userData);
}

export async function userRegister(data) {
    const userData = await methods.post(user.register, data);
    setUserData(userData);
}

export async function userLogout() {
    methods.get(user.logout);
    removeUserData();
}