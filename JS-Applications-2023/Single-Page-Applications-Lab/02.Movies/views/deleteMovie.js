import { homePage } from '../src/home.js';
import { urlEdnPoint } from '../src/utility.js';

// Delete movie
export function deleteMovie(movieId) {

    fetch('http://localhost:3030' + urlEdnPoint.deleteMovieDELETE + movieId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(sessionStorage.userInfo).authToken
        }
    })
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            // Go home page
            homePage();
        })
        .catch(error => alert(error.message));
}