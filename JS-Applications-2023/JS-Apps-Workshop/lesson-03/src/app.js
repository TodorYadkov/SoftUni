window.addEventListener('load', homePage);
navBtns.catalogBtn.addEventListener('click', homePage);

export async function homePage() {
    clearActiveBtn();
    navBtns.catalogBtn.classList.add('active');
    // Registered user
    if (sessionStorage.getItem('userInfo') !== null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        navBtns.logoutBtn.addEventListener('click', logout);
        navBtns.createBtn.addEventListener('click', showCreate);
        // Guest
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
        navBtns.loginBtn.addEventListener('click', showLogin);
        navBtns.registerBtn.addEventListener('click', showRegister);
    }

    sections.main.appendChild(sections.loadingTextP);

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    sections.loadingTextP.remove();
    sections.main.replaceChildren(...cards);
}

import { showLogin } from './login.js';
import { showCreate } from './create.js';
import { showRegister } from './register.js';
import { logout, getRecipes } from './requests.js';
import { createRecipePreview, clearActiveBtn, sections, navBtns } from './dom.js';

// Code Refactoring
// You start with four separate HTML files for each page
// Rewrite the application, so that it is a single-page application, using modules with import/export statements. 
// There will be a single HTML file, containing all resources and the views will be dynamically generated via JavaScript.
// Add more functionalities for this code
// 1.   Edit Recipe (only for the creator)
// 1.1. On click the "Edit" button you are redirected to the edit page and all the details of the recipe should be filled up in the input fields.
// 2.   Delete Recipe (only for the creator)
// 2.1. By clicking on "Delete" button the app needs first confirmation for deleting, then sends DELETE request to the back-end and deletes the recipe. 
// 2.2. Then the app shows message, that the recipe is deleted successful.