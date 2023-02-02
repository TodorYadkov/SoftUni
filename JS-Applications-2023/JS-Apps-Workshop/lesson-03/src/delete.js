import { sections, e, showLess } from './dom.js';

// Delete recipe by id
export async function showDelete(recipe) {
    if (sessionStorage.getItem('userInfo') === null) {
        return alert('You\'re not logged in!');
    }

    const recipeId = recipe._id;

    try {
        const response = await fetch('http://localhost:3030/data/recipes/' + recipeId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(sessionStorage.getItem('userInfo')).authToken
            }
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const notification = e('article', {}, e('h2', {}, 'Recipe deleted'));
        notification.addEventListener('click', showLess);
        sections.main.replaceChildren(notification);
    } catch (error) {
        alert(error.message);
    }
}