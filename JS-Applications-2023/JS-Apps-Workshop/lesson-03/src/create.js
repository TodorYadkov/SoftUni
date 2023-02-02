import { navBtns, clearActiveBtn, sections, showLess, createRecipeCard } from './dom.js';

// Show create page (<article>)
export function showCreate() {
    clearActiveBtn();
    navBtns.createBtn.classList.add('active');
    sections.main.replaceChildren(sections.createArticle);

    const form = sections.createArticle.getElementsByTagName('form')[0];
    if (form.getAttribute('data-event') === null) {
        form.setAttribute('data-event', 'true');
        form.addEventListener('submit', (e) => createFn(e, form));
        sections.createArticle.addEventListener('click', showLess);
    }
}
// Create new recipe
export async function createFn(event, formHTMLEl) {
    event.preventDefault();
    if (sessionStorage.getItem('userInfo') === null) {
        return alert('You\'re not logged in!');
    }

    const formData = Object.fromEntries(new FormData(formHTMLEl));
    for (const input in formData) {
        if (formData[input] === '') {
            return;
        }

        formData[input] = formData[input].trim();
    }

    const body = {
        name: formData.name,
        img: formData.img,
        ingredients: formData.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
        steps: formData.steps.split('\n').map(l => l.trim()).filter(l => l != '')
    };

    try {
        const response = await fetch('http://localhost:3030/data/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(sessionStorage.getItem('userInfo')).authToken,
            },
            body: JSON.stringify(body)
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();
        const newRecipe = createRecipeCard(data);
        newRecipe.addEventListener('click', showLess);

        formHTMLEl.reset();
        sections.main.replaceChildren(newRecipe);

    } catch (error) {
        console.error(error.message);
    }
}
