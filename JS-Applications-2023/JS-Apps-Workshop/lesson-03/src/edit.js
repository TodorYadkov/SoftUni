import { createRecipeCard, clearActiveBtn, sections, showLess } from './dom.js';

// Show edit page (<article>) and fill form inputs
export async function showEdit(recipe, articleRecipRef) {
    clearActiveBtn();
    sections.main.replaceChildren(sections.editArticle);

    const form = sections.editArticle.getElementsByTagName('form')[0];
    if (form.getAttribute('data-event') === null) {
        form.setAttribute('data-event', 'true');
        form.addEventListener('submit', (e) => editRecipe(e, form, recipe._id));
        sections.editArticle.addEventListener('click', (e) => backToRecipe(e, articleRecipRef));
    }
    // fill form
    const arrayForm = [...form];
    for (const input of arrayForm) {
        for (const prop in recipe) {
            if (input.name === prop) {
                input.value = recipe[prop];
            }
        }
    }
}
// Send put request to update recipe
async function editRecipe(event, formHTMLEl, recipeId) {
    event.preventDefault();
    if (sessionStorage.getItem('userInfo') === null) {
        return alert('You\'re not logged in!');
    }

    const formData = Object.fromEntries(new FormData(formHTMLEl));
    for (const prop in formData) {
        if (formData[prop] === '') {
            return;
        }

        formData[prop] = formData[prop].trim();
    }

    const body = {
        name: formData.name,
        img: formData.img,
        ingredients: formData.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
        steps: formData.steps.split('\n').map(l => l.trim()).filter(l => l != '')
    };

    try {
        const response = await fetch('http://localhost:3030/data/recipes/' + recipeId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(sessionStorage.getItem('userInfo')).authToken
            },
            body: JSON.stringify(body)
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();
        // Make a new card for an updated recipe and add an event to go to the home page when clicked <h2>
        const updatedRecipe = createRecipeCard(data);
        updatedRecipe.addEventListener('click', showLess);

        formHTMLEl.reset();
        sections.main.replaceChildren(updatedRecipe);
    } catch (error) {
        console.error(error.message);
    }
}
// Back to the recipe - from update click on <h2>
function backToRecipe(event, articleRecipRef) {
    if (event.target.tagName === 'H2') {
        const isStop = confirm('Do you want to stop editing the recipe?');
        if (isStop) {
            sections.main.replaceChildren(articleRecipRef);
        }
    }
}