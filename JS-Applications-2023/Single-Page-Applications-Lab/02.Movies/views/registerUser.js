import { generateEl, sections } from '../src/dom.js';
import { homePage } from '../src/home.js';
import { navBar } from './navbar.js';

// Register a new user - generate form
export function loadRegisterForm() {
    // Load main navigation
    sections.main.replaceChildren(navBar());

    // Generate HTML element - form
    const section = generateEl('section', { id: 'form-sign-up', className: 'view-section' });
    // Add event listener - delegetion
    const form = generateEl('form', {
        id: 'register-form', className: 'text-center border border-light p-5', action: '', method: '',
        eventListeners: { submit: registerFn }
    }, section);
    generateEl('h1', { textContent: 'Register' }, form);
    const divF1 = generateEl('div', { className: 'form-group' }, form);
    generateEl('label', { for: 'email', textContent: 'Email' }, divF1);
    generateEl('input', { id: 'email', type: 'email', className: 'form-control', placeholder: 'Email', name: 'email', value: '' }, divF1);
    const divF2 = generateEl('div', { className: 'form-group' }, form);
    generateEl('label', { for: 'password', textContent: 'Password' }, divF2);
    generateEl('input', { id: 'password', type: 'password', className: 'form-control', placeholder: 'Password', name: 'password', value: '' }, divF2);
    const divF3 = generateEl('div', { className: 'form-group' }, form);
    generateEl('label', { for: 'repeatPassword', textContent: 'Repeat Password' }, divF3);
    generateEl('input', { id: 'repeatPassword', type: 'password', className: 'form-control', placeholder: 'Repeat-Password', name: 'repeatPassword', value: '' }, divF3);
    generateEl('button', { type: 'submit', className: 'btn btn-primary', textContent: 'Register' }, form);

    // Display the form on the page
    sections.main.appendChild(section);

    // Get user input and register new user
    async function registerFn(event) {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(form));
        for (const prop in formData) {
            if (formData[prop] === '') {
                alert(`${prop.split('')[0].toLocaleUpperCase()+prop.slice(1)} must not be an empty field!`);
                return;
            }

            formData[prop] = formData[prop];
        }

        if (formData.repeatPassword !== formData.password) {
            alert('Password does not match');
            return;
        }

        if (formData.password.length < 6) {
            alert('Password must be longer than 6 characters!');
            return;
        }

        try {
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                })
            });

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
            console.error(error.message);
        }
    }
}