import { showEdit } from './edit.js';
import { showDelete } from './delete.js';
import { getRecipeById } from './requests.js';
import { homePage } from './app.js';

// Get buttons
export const navBtns = {
    catalogBtn: document.getElementById('catalogBtn'),
    createBtn: document.getElementById('createBtn'),
    logoutBtn: document.getElementById('logoutBtn'),
    loginBtn: document.getElementById('loginBtn'),
    registerBtn: document.getElementById('registerBtn'),
};
// Get sections
export const sections = {
    main: document.getElementById('main'),
    divHidden: document.getElementById('views'),
    loadingTextP: document.getElementById('loading'),
    loginArticle: document.getElementById('login-article'),
    registerArticle: document.getElementById('register-article'),
    createArticle: document.getElementById('create-article'),
    editArticle: document.getElementById('edit-article'),
};

// Generate a preview of each recipe
export function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;
    // Show recipe details
    async function toggleCard() {
        const recipeDetails = await getRecipeById(recipe._id);
        const readyRecipeDetails = createRecipeCard(recipeDetails);
        readyRecipeDetails.addEventListener('click', (e) => showLess(e));
        showRecipe(readyRecipeDetails);
    }
}
// Clear the active class from all buttons
export function clearActiveBtn() {
    for (let btn in navBtns) {
        navBtns[btn].classList.remove('active');
    }
}
// Display only one recipe
export function showRecipe(recipeArticle) {
    clearActiveBtn();
    sections.main.replaceChildren(recipeArticle);
}
// Generate a recipe with ingredients and cooking method
export function createRecipeCard(recipe) {
    // Check if the user is logged in - show or hide [Edit][Delete] buttons
    let userId = '';
    if (sessionStorage.getItem('userInfo') !== null) {
        userId = JSON.parse(sessionStorage.getItem('userInfo')).userId;
    }

    const isHidden = recipe._ownerId === userId;
    const result = e('article', { id: recipe._ownerId },
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );

    if (isHidden) {
        result.appendChild(e('div', { className: 'controls' },
            e('button', { textContent: '\u270E Edit', className: 'controls button', onClick: () => showEdit(recipe, result) }),
            e('button', { textContent: '\u2716 Delete', className: 'controls button', onClick: () => showDelete(recipe) })
        ));
    }

    return result;
}
// Close the recipe detail and return to small view
export function showLess(event) {
    if (event.target.tagName === 'H2' || event.type === 'submit') {
        setTimeout(() => { homePage(); }, 200);
    }
}
// Genereate HTML element
export function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}