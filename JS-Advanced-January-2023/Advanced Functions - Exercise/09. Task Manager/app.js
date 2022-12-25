function solve() {
    document.getElementById('add').addEventListener('click', addFn);

    const taskName = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const sectionElements = document.querySelector('.wrapper').children;

    // function to add section in 'Open' - sectionElements[1]
    function addFn(event) {
        event.preventDefault();
        if (taskName.value != false & description.value != false & date.value != false) {
            const parentEl = sectionElements[1].children[1];
            const article = createEl('article');
            const h3 = createEl('h3', taskName.value);
            const pDescription = createEl('p',`Description: ${description.value}`);
            const pDate = createEl('p', `Due Date: ${date.value}`);
            const div = createEl('div', '_', 'flex');
            const btnStart = createEl('button', 'Start', 'green');
            const btnDel = createEl('button', 'Delete', 'red');
            article.appendChild(h3);
            article.appendChild(pDescription);
            article.appendChild(pDate);
            article.appendChild(div);
            div.appendChild(btnStart);
            div.appendChild(btnDel);
            parentEl.appendChild(article);

            btnStart.addEventListener('click', startFn);
            btnDel.addEventListener('click', deleteFn);

            taskName.value = '';
            description.value = '';
            date.value = '';
        }
    }

    // function to move the Task in the section "In Progress" - sectionElements[2] 
    function startFn(event) {
        const btnToRemove = event.target;
        const article = event.target.parentElement.parentElement;
        const sectionInPrrogress = sectionElements[2].children[1];
        const btnFinish = createEl('button', 'Finish', 'orange');
        event.target.parentElement.appendChild(btnFinish);
        btnToRemove.remove();
        sectionInPrrogress.appendChild(article)

        btnFinish.addEventListener('click', finishFn);
    }

    // function to delete whole Task (article)
    function deleteFn(event) {
        const article = event.target.parentElement.parentElement;
        article.remove();
    }

    // function to move the Task to the section "Complete" - sectionElements[3]
    function finishFn(event) {
        const sectionComplete = sectionElements[3].children[1];
        const article = event.target.parentElement.parentElement;
        const btnRemove = event.target.parentElement;
        btnRemove.remove();
        sectionComplete.appendChild(article);
    }

    // function - create html element with text content and class
    function createEl(element, text, classEl) {
        const el = document.createElement(`${element}`);

        if (text != false && text !== '_') {
            el.textContent = text;
        }

        if (classEl) {
            el.classList.add(`${classEl}`);
        }

        return el;
    }
}