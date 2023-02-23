const HOST = 'http://localhost:3030/';

async function request(method, endPoint, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(HOST + endPoint, options);
        if (response.ok == false) {
            throw new Error(`Error: ${response.statusText} ${response.status}`);
        }

        const data = await response.json();
        return data;

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