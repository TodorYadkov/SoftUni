import ServerError from "../../../shared/errors/ServerError";

import { HOST } from "../../environments/constants";

async function requester(method, endpoint, data, context) {
    const url = HOST + endpoint;
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = context.getUserSession();
    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
        console.log(userData.accessToken)
    }

    try {
        const response = await fetch(url, options);
        if (response.ok === false) {
            if (response.status === 403) {
                context.clearUserSession();
            }

            const error = await response.json();
            throw error;
        }

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        // Throw React component with entire error object
        // ServerError handle message from error and display on the screen in 5 seconds
        throw ServerError(error);
    }
}

export const request = {
    get: (endpoint, context) => requester('GET', endpoint, null, context),
    post: (endpoint, data, context) => requester('POST', endpoint, data, context),
    put: (endpoint, data, context) => requester('PUT', endpoint, data, context),
    delete: (endpoint, context) => requester('DELETE', endpoint, null, context)
};