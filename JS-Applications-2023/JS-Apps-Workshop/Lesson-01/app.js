// Async request to get a data for all recipes
const getAllReceips = async () => {
    // Get the promise and transform into response using await
    const responseAllReceips = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    // Check status code on received response
    if (responseAllReceips.status !== 200) {
        throw new Error(`Error: ${responseAllReceips.status} - ${responseAllReceips.statusText}`);
    }
    // Parse the response into an object - json() - first make response to text - next is JSON.parse();
    const dataReceips = await responseAllReceips.json();
    // Return a data object for all recipes
    return dataReceips;
};
// Async request to get recipe data using its id
const getReceipById = async (id) => {
    // Get the promise and transform into response using await
    const responseReceip = await fetch(`http://localhost:3030/jsonstore/cookbook/details/${id}`);
    // Check status code on received response
    if (responseReceip.status !== 200) {
        throw new Error(`Error: ${responseReceip.status} - ${responseReceip.statusText}`);
    }
    // Parse the response into an object
    const currentReceipJSON = await responseReceip.json();
    // Return a data object for wanted recipe
    return currentReceipJSON;
};
// This function creates elements in the DOM
const createRecipePreview = (recipe, parentEl) => {
    // Each recipe comes from a part where the comment is -> Code start here
    // Make all the elements on the screen. For each element call the function generateEl
    const article = generateEl('article', '', parentEl, { class: 'preview', onClick: showIngredients });
    const divH2 = generateEl('div', '', article, { class: 'title' });
    generateEl('h2', recipe.name, divH2);
    const divImg = generateEl('div', '', article, { class: 'small' });
    generateEl('img', '', divImg, { src: recipe.img, alt: recipe.name });

    // To use Closure - make a nested function and don't need to use DOM manipulations to find an already created element
    // Function showIngredients show all hidden items from each recipe
    async function showIngredients() {
        // Using the try - catch construct to display if there is an error in the response
        try {
            const receipeFromID = await getReceipById(recipe._id);

            const articleIngredients = generateEl('article', '', parentEl, { class: 'preview' });
            articleIngredients.addEventListener('click', () => { articleIngredients.replaceWith(article); });

            generateEl('h2', recipe.name, articleIngredients);
            const divBand = generateEl('div', '', articleIngredients, { class: 'band' });

            const divImgIngredients = generateEl('div', '', divBand, { class: 'thumb' });
            generateEl('img', '', divImgIngredients, { src: recipe.img, alt: recipe.name });

            const divIngredients = generateEl('div', '', divBand, { class: 'ingredients' });
            generateEl('h3', 'Ingredients', divIngredients);
            const ul = generateEl('ul', '', divIngredients);
            receipeFromID.ingredients.forEach(i => generateEl('li', i, ul));

            const divPreparation = generateEl('div', '', articleIngredients, { class: 'description' });
            generateEl('h3', 'Preparation', divPreparation);
            receipeFromID.steps.forEach(s => generateEl('p', s, divPreparation));

            article.replaceWith(articleIngredients);
        } catch (err) {
            parentEl.textContent = err.message;
        }

    };
};
// function expression - creating the HTML elements
const generateEl = (typeEl, content, parent, attributes) => {
    const el = document.createElement(typeEl);
    el.textContent = content;

    if (attributes) {
        for (const attr in attributes) {
            if (attr.substring(0, 2) === 'on') {
                el.addEventListener(attr.substring(2).toLocaleLowerCase(), attributes[attr]);
            } else {
                el.setAttribute(attr, attributes[attr]);
            }
        }
    }

    parent.appendChild(el);
    return el;
};
// Code start here
window.addEventListener('load', async () => {
    // Remove all element in main
    const main = document.querySelector('main');
    main.innerHTML = '';
    // Get all the recipes and if there is an error show the message
    try {
        const recipes = await getAllReceips();
        // Make from each recipe HTML element
        Object.values(recipes).forEach(r => createRecipePreview(r, main));
    } catch (err) {
        main.textContent = err.message;
    }
});