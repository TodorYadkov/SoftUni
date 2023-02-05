import { generateEl, sections } from '../src/dom.js';
import { urlEdnPoint } from '../src/utility.js';
import { deleteMovie } from './deleteMovie.js';
import { loadEditMoivie } from './editMovies.js';
import { checkIfLiked, getNumberLikes, likeMovie } from './likeMovie.js';
import { navBar } from './navbar.js';

// Show movie details
export async function loadDetails(movieId, ownerId) {
    sections.main.replaceChildren(navBar());
    // Spinner loading
    const imgLoadingToRemove = generateEl('img', { src: './static/spinner.gif', alt: 'Loading...', width: '60', height: '60', className: 'text-center' }, sections.main);

    try {
        const response = await fetch('http://localhost:3030' + urlEdnPoint.getMoviesGET + '/' + movieId);
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }
        // Movie details
        const dataMovie = await response.json();

        // Generate HTML elements
        const section = generateEl('section', { id: 'movie-example', className: 'view-section' });
        const divContainer = generateEl('div', { className: 'container' }, section);
        const divRow = generateEl('div', { className: 'row bg-light text-dark' }, divContainer);
        generateEl('h1', { textContent: dataMovie.title }, divRow);
        const divImg = generateEl('div', { className: 'col-md-8' }, divRow);
        generateEl('img', { className: 'img-thumbnail', src: dataMovie.img, alt: 'Movie' }, divImg);
        const divCol = generateEl('div', { className: 'col-md-4 text-center' }, divRow);
        generateEl('h3', { className: 'my-3', textContent: 'Movie Description' }, divCol);
        generateEl('p', { textContent: dataMovie.description }, divCol);

        // Check if the current user is the creator of the movie - show/hide buttons
        const numberLikes = await getNumberLikes(movieId); // Get the number of likes
        // Creator of the movie
        if (JSON.parse(sessionStorage.userInfo).userId === ownerId) {
            generateEl('a', {
                textContent: 'Delete', className: 'btn btn-danger', style: 'margin-right: 5px;', href: 'javascript:void(0)',
                eventListeners: { click: () => deleteMovie(movieId) },
            }, divCol);
            generateEl('a', {
                textContent: 'Edit', className: 'btn btn-warning', style: 'margin-right: 5px;', href: 'javascipt:void(0)',
                eventListeners: { click: (e) => loadEditMoivie(e, dataMovie.title, dataMovie.description, dataMovie.img, movieId) },
            }, divCol);
            // Show movie likes to the creator of the movie
            generateEl('span', { className: 'enrolled-span', textContent: `Liked ${numberLikes}` }, divCol);
            // Non creator
        } else {
            // Check if the user is liked the movie - show/hide [Like] btn
            const isLiked = await checkIfLiked(movieId);
            if (isLiked.length < 1) {
                const likeBtn = generateEl('a', {
                    textContent: 'Like', className: 'btn btn-primary', style: 'margin-right: 5px;', href: 'javascript:void(0)',
                    eventListeners: { click: (e) => likeMovie(e, movieId, likeBtn, divCol) },
                }, divCol);
            } else {
                // Show movie likes
                generateEl('span', { className: 'enrolled-span', textContent: `Liked ${numberLikes}` }, divCol);
            }
        }

        // Remove loading spinner
        sections.main.removeChild(imgLoadingToRemove);
        // Display movie info
        sections.main.appendChild(section);

    } catch (error) {
        alert(error.message);
    }
}