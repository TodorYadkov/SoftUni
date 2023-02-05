import { homeContent } from '../views/homePage.js';
import { navBar } from '../views/navbar.js';
import { generateEl, sections } from './dom.js';
window.addEventListener('load', homePage);

export async function homePage() {
    sections.main.replaceChildren();
    sections.main.appendChild(navBar());
    sections.main.appendChild(await homeContent());
}

// You are assigned to implement a Single Page Web Application. The app keeps users and movies.
// Logged-in users should be able to view add movies and like movies.
// Logged-in users should also be able to edit or delete the movies they have added.
// REST Service
// You can use the provided server to store your data. Use the following endpoints:
// •	Get all movies: /data/movies (GET)
// •	Create movie: /data/movies (POST)
// •	Update movie: /data/movies/:id (PUT)
// •	Delete movie: /data/movies/:id (DELETE)
// •	Get number of likes for a movie: /data/likes?where=movieId%3D%22{movieId}%22&distinct=_ownerId&count (GET)
// •	Get like for a movie from specific user: /data/likes?where=movieId%3D%22{movieId}%22%20and%20_ownerId%3D%22{userId}%22 (GET)
// •	Add a like: /data/likes (POST)
// •	Revoke a like: /data/likes/:id (DELETE)
// Note that the provided service automatically limits the number of results from every request to 10.
// You may need to use pagination options, to get all entries. https://github.com/softuni-practice-server/softuni-practice-server