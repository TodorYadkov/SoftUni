import { logout } from './api/user.js';
import { showCreate } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
// Initialize is the first function to be executed
export function initialize() {
    const main = document.getElementById('main');
    // Add event on navigation buttons
    document.querySelector('nav').addEventListener('click', navigateTo);
    // Add event on [Logout]
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        logout();
        navUpdate();
        goTo('/');
    });
    // Link to each page
    const links = {
        '/': showHome,
        '/catalog': showDashboard,
        '/create': showCreate,
        '/login': showLogin,
        '/register': showRegister,
        '/details': showDetails,
    };
    // This object is an important part of the application. We invoke these functions from different place, and that is "Dependency injection"
    // To use this, we pass this object as an argument to a function that takes it as a parameter and thus use the references of the functions we need
    const context = {
        showSection,
        goTo,
        navUpdate,
    };

    return context;
    // Navigation button
    function navigateTo(event) {
        event.preventDefault();
        let target = event.target;
        if (target.tagName === 'IMG') {
            target = target.parentElement;
        }

        if (target.tagName === 'A') {
            const url = new URL(target.href);
            const handler = links[url.pathname];
            if (typeof handler === 'function') {
                handler(context);
            }
        }
    }
    // Go to some page - Use with links object
    function goTo(linkPage, ...params) {
        const [ideaId] = params;
        links[linkPage](context, ideaId);
    }
    // Display some page on the screen
    function showSection(section) {
        main.replaceChildren(section);
    }
    // Check if the user is logged in
    function navUpdate() {
        const user = sessionStorage.getItem('userInfo');
        const userNav = document.querySelectorAll('.user');
        const guestNav = document.querySelectorAll('.guest');
        if (user) {
            userNav.forEach(u => u.style.display = '');
            guestNav.forEach(g => g.style.display = 'none');
        } else {
            userNav.forEach(u => u.style.display = 'none');
            guestNav.forEach(g => g.style.display = '');
        }
    }
}