import { homePage } from './app.js';

// Get all recipes from server
export async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes');
    const recipes = await response.json();

    return recipes;
}
// Get recipe by id from server
export async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}
// Logout
export async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': JSON.parse(sessionStorage.getItem('userInfo')).authToken,
        },
    });
    if (response.status == 204) {
        sessionStorage.removeItem('userInfo');
        setTimeout(() => { homePage(); }, 400);
    } else {
        console.error(await response.json());
    }
}