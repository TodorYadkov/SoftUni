import { generateEl, sections } from '../src/dom.js';
import { homePage } from '../src/home.js';
import { urlEdnPoint } from '../src/utility.js';
import { navBar } from './navbar.js';

// Load addMovies form
export function loadAddMovies() {
    // Load main navigation
    sections.main.replaceChildren(navBar());

    // Generate HTML element - form
    const section = generateEl('section', { id: 'add-movie', className: 'view-section' });
    // Add event listener - delegetion
    const form = generateEl('form', {
        id: 'add-movie-form', className: 'text-center border border-light p-5', action: '#', method: '',
        eventListeners: { submit: addMovieFn }
    }, section);
    generateEl('h1', { textContent: 'Add Movie' }, form);
    const divF1 = generateEl('div', { className: 'form-group' }, form);
    generateEl('label', { for: 'title', textContent: 'Movie Title' }, divF1);
    generateEl('input', { id: 'title', type: 'text', className: 'form-control', placeholder: 'Title', name: 'title', value: '' }, divF1);
    const divF2 = generateEl('div', { className: 'form-group' }, form);
    generateEl('label', { for: 'description', textContent: 'Movie Description' }, divF2);
    generateEl('textarea', { className: 'form-control', placeholder: 'Description', name: 'description' }, divF2);
    const divF3 = generateEl('div', { className: 'form-group' }, form);
    generateEl('label', { for: 'imageUrl', textContent: 'Image url' }, divF3);
    generateEl('input', { id: 'imageUrl', type: 'text', class: 'form-control', placeholder: 'Image Url', name: 'img', value: '' }, divF3);
    generateEl('button', { type: 'submit', className: 'btn btn-primary', textContent: 'Submit' }, form);
    // Display the form on the page
    sections.main.appendChild(section);

    async function addMovieFn(event) {
        event.preventDefault();
        // Validate user input
        const formData = Object.fromEntries(new FormData(form));
        for (const prop in formData) {
            if (formData[prop] === '') {
                alert(`${prop.split('')[0].toLocaleUpperCase() + prop.slice(1)} must not be an empty field!`);
                return;
            }

            formData[prop] = formData[prop].trim();
        }

        try {
            const response = await fetch('http://localhost:3030' + urlEdnPoint.createMoviePOST, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(sessionStorage.userInfo).authToken,
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    img: formData.img,
                })
            });

            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            // Go home page
            homePage();

        } catch (error) {
            alert(error.message);
        }
    }
}