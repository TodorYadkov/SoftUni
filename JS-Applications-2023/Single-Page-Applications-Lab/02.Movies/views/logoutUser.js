import { loadLoginForm } from './loginUser.js';

export async function logoutFn() {
    try {
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: {
                'X-Authorization': JSON.parse(sessionStorage.getItem('userInfo')).authToken,
            },
        });

        // https://github.com/softuni-practice-server/softuni-practice-server
        if (response.status !== 204) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }
        // Remove access token form session storage
        sessionStorage.removeItem('userInfo');
        // Go home page
        loadLoginForm();
    } catch (error) {
        console.error(error.message);
    }
}