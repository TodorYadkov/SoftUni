import { generateEl } from '../src/dom.js';
import { urlEdnPoint } from '../src/utility.js';
import { loadAddMovies } from './addMovies.js';
import { loadDetails } from './detailsMovie.js';

// Get the movies from the server and make an HTML structure
export async function homeContent() {
    try {
        // Generate HTML element home page
        const section = generateEl('section', { id: 'home-page', className: 'view-section' });
        const divJumbotron = generateEl('div', { className: 'jumbotron jumbotron-fluid text-light', style: 'background-color: #343a40' }, section);
        generateEl('img', {
            src: 'https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg',
            className: 'img-fluid', alt: 'Responsive image', style: 'width: 150%; height: 200px'
        }, divJumbotron);
        generateEl('h1', { className: 'display-4', textContent: 'Movies' }, divJumbotron);
        generateEl('p', { className: 'lead', textContent: 'Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.' }, divJumbotron);
        generateEl('h1', { className: 'text-center', textContent: 'Movies' }, section);

        // Show or hide button [Add Movie] - if the user is logged
        if (sessionStorage.userInfo !== undefined) {
            const sectionAddMovie = generateEl('section', { id: 'add-movie-button', className: 'user' }, section);
            generateEl('a', {
                href: 'javascript:void(0)', className: 'btn btn-warning', textContent: 'Add Movie',
                eventListeners: { click: loadAddMovies }
            }, sectionAddMovie);
        }

        const sectionMovie = generateEl('section', { id: 'movie' }, section);
        const divMt3 = generateEl('div', { className: 'mt-3' }, sectionMovie);
        const divRowFlex = generateEl('div', { className: 'row d-flex d-wrap' }, divMt3);
        const ulMovies = generateEl('ul', { id: 'movies-list', className: 'card-deck d-flex justify-content-center' }, divRowFlex);
        // Spinner loading
        const imgLoadingToRemove = generateEl('img', { src: './static/spinner.gif', alt: 'Loading...', width: '60', height: '60', className: 'text-center' }, ulMovies);

        // Get movies from the server
        const response = await fetch('http://localhost:3030' + urlEdnPoint.getMoviesGET);
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }
        // Generate a thumbnail for each movie
        const data = await response.json();
        ulMovies.removeChild(imgLoadingToRemove);
        data.forEach(m => {
            const li = generateEl('li', { className: 'card' }, ulMovies);
            generateEl('img', { src: m.img, alt: 'Movie Picture', className: 'img-thumbnail' }, li);
            const divH4 = generateEl('h4', { className: 'card-body' }, li);
            generateEl('h4', { textContent: m.title }, divH4);

            // Show or hide button [Details] - if the user is logged
            if (sessionStorage.userInfo !== undefined) {
                const divFooter = generateEl('div', { className: 'card-footer' }, li);
                generateEl('button', {
                    textContent: 'Details', className: 'btn btn-info',
                    eventListeners: { click: () => loadDetails(m._id, m._ownerId) }
                }, divFooter);
            }
        });

        return section;

    } catch (error) {
        console.error(error.message);
    }
}