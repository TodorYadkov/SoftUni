import { clearUserData, getUserData } from '../util.js';

const HOST = 'http://localhost:3030';

async function request(method, endPoint, data) {
    const options = { method, headers: {} };

    if (data) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    const userToken = getUserData();
    if (userToken) {
        options.headers = { 'X-Authorization': userToken.accessToken };
    }

    try {
        const response = await fetch(HOST + endPoint, options);

        if (response.ok === false) {
            if (response.status == 403) {
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del as delete
};