import { alertMessageFn, getUserData, removeUserData } from '../util.js';

const HOST = 'http://localhost:3030';

async function request(method, endPoint, data) {
    const options = {
        method,
        headers: {},
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const token = getUserData()?.accessToken;
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(HOST + endPoint, options);
        if (response.ok === false) {
            if (response.status === 403) {
                removeUserData();
            }

            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status === 204 ? response : response.json();
    } catch (error) {
        alertMessageFn(error.message, 'OK');
        throw error;
    }
}

export const methods = {
    get: (endPoint) => request('GET', endPoint),
    post: (endPoint, data) => request('POST', endPoint, data),
    put: (endPoint, data) => request('PUT', endPoint, data),
    delete: (endPoint) => request('DELETE', endPoint),
};