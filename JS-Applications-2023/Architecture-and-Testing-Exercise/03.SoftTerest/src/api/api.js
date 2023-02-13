// Create host
const HOST = 'http://localhost:3030/';
// Asynchronous function for requests to the server
async function request(method, endPoint, data) {
    // This is the second parameter of the fetch method
    const option = {
        method,
        headers: {}
    };
    // Check for data - this is the body of the request
    if (data) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }
    // If the user is logged in - add authorization to the headers
    if (sessionStorage.getItem('userInfo')) {
        option.headers['X-Authorization'] = JSON.parse(sessionStorage.getItem('userInfo')).accessToken;
    }

    try {
        const response = await fetch(HOST + endPoint, option);
        // Check for error
        if (response.ok === false) {
            if (response.status === 403) {
                sessionStorage.removeItem('userInfo');
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
        console.error(error.message);
        // Throw an error to stop the application
        throw error;
    }
}
// Bind function request with first parameter to be set for different method
const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');
// Export these new functions so I can use them with a locked first parameter and if needed I can add the other two parameters to the request function
export {
    get,
    post,
    put,
    del as delete
};