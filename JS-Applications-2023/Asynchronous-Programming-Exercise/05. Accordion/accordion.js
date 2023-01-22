(async function () {
    const URL_BASE = 'http://localhost:3030/jsonstore/advanced/articles';
    const mainSection = document.getElementById('main');

    try {
        // Get all elements from address /list
        const respond = await fetch(`${URL_BASE}/list`);
        // Throw new error if the response is not correct
        if (respond.status !== 200) {
            throw new Error(`Error: ${respond.statusText} - ${respond.status}`);
        }
        // Get the data from response
        const dataAllItems = await respond.json();


        for (let article of dataAllItems) {
            const divAccordion = generateEl('div', '', mainSection, { class: 'accordion' });
            const divHead = generateEl('div', '', divAccordion, { class: 'head' });
            generateEl('span', article.title, divHead);
            // Make hidden content
            const divExtra = generateEl('div', '', divAccordion, { class: 'extra' });
            const btnMore = generateEl('button', 'More', divHead, { class: 'button', id: article._id });
            btnMore.addEventListener('click', (e) => { showMoreLessInfo(e, btnMore, divExtra, mainSection); });
        }
    } catch (error) {
        mainSection.innerHTML = `Error: ${error.message}`;
    }


    async function showMoreLessInfo(event, btnMore, divExtra, mainSection) {
        // Check that the button text is correct and that the content is hidden
        btnMore.textContent === 'More' ? btnMore.textContent = 'Less' : btnMore.textContent = 'More';
        divExtra.style.display === 'block' ? divExtra.style.display = 'none' : divExtra.style.display = 'block';
        try {
            const responseArticle = await fetch(`${URL_BASE}/details/${btnMore.getAttribute('id')}`);
            if (responseArticle.status !== 200) {
                throw new Error(`Error: ${responseArticle.statusText} - ${responseArticle.status}`);
            }
            // Get the content of the article and add to paragraph
            const dataArticle = await responseArticle.json();
            divExtra.innerHTML = `<p>${dataArticle.content}</p>`;
        } catch (error) {
            mainSection.innerHTML = `Error: ${error.message}`;
        }

    }

    function generateEl(typeEl, content, parent, attributes) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attributes) {
            for (const key in attributes) {
                el.setAttribute(key, attributes[key]);
            }
        }

        parent.appendChild(el);
        return el;
    }
})();