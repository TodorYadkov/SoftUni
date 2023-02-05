import { generateEl, sections } from '../src/dom.js';
import { homePage } from '../src/home.js';
import { navBar } from './navbar.js';

// Login form
export function loadLoginForm() {
    // Load main navigation
    sections.main.replaceChildren(navBar());

    // Generate HTML element - form
    const section = generateEl('section', { id: 'form-login', className: 'view-section' });
    // Add event listener - delegetion
    const form = generateEl('form', {
        id: 'login-form', className: 'text-center border border-light p-5', action: '', method: '',
        eventListeners: { submit: loginFn }
    }, section);
    generateEl('h1', { textContent: 'Login' }, form);
    const divF1 = generateEl('div', { className: 'form-group' }, form);
    generateEl('label', { for: 'email', textContent: 'Email' }, divF1);
    generateEl('input', { id: 'email', type: 'email', className: 'form-control', placeholder: 'Email', name: 'email', value: '' }, divF1);
    const divF2 = generateEl('div', { className: 'form-group' }, form);
    generateEl('label', { for: 'password', textContent: 'Password' }, divF2);
    generateEl('input', { id: 'password', type: 'password', className: 'form-control', placeholder: 'Password', name: 'password', value: '' }, divF2);
    generateEl('button', { type: 'submit', className: 'btn btn-primary', textContent: 'Login' }, form);
    // Display the form on the page
    sections.main.appendChild(section);

    // Login
    async function loginFn(event) {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(form));
        for (const prop in formData) {
            if (formData[prop] === '') {
                alert(`${prop.split('')[0].toLocaleUpperCase() + prop.slice(1)} must not be an empty field!`);
                return;
            }
        }

        try {
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            if (response.status === 403) {
                throw new Error(`The password or email is wrong! - ${response.status}`);
            }

            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            const data = await response.json();
            sessionStorage.setItem('userInfo', JSON.stringify({
                authToken: data.accessToken,
                email: formData.email,
                userId: data._id
            }));

            // Go home page
            homePage();

        } catch (error) {
            alert(error.message);
        }
    }
}