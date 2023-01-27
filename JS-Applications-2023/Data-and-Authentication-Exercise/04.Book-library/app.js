const URL_BOOKS = 'http://localhost:3030/jsonstore/collections/books';
const table = document.getElementsByTagName('tbody')[0];
const form = document.getElementsByTagName('form')[0];
const inputName = document.querySelector('[name="title"]');
const inputAuthor = document.querySelector('[name="author"]');

form.addEventListener('submit', createBook);
table.addEventListener('click', actionButtonsFn);

document.getElementById('loadBooks').addEventListener('click', loadBooksFn);
loadBooksFn();
// Load all books
function loadBooksFn() {
    // Clear all children when no parameters
    table.replaceChildren();

    fetch(URL_BOOKS)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            Object.entries(data).forEach(book => {
                const id = book[0];
                const bookObj = book[1];

                const tr = document.createElement('tr');
                generateEl('td', bookObj.title, tr);
                generateEl('td', bookObj.author, tr);
                const tdAction = generateEl('td', '', tr);
                generateEl('button', 'Edit', tdAction, { id });
                generateEl('button', 'Delete', tdAction, { id });

                table.appendChild(tr);
            });
        })
        .catch(err => table.textContent = err.message);
}

// Create new book and add to base 
async function createBook(event) {
    event.preventDefault();
    // Get input from <form>
    const formData = new FormData(form);
    const inputs = Object.fromEntries(formData);
    for (const prop in inputs) {
        if (inputs[prop] === '') {
            return;
        }

        inputs[prop] = inputs[prop].trim();
    }

    try {
        const response = await fetch(URL_BOOKS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.assign({}, inputs))
        });
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        inputName.value = '';
        inputAuthor.value = '';
        loadBooksFn();
    } catch (error) {
        table.textContent = error.message;
    }
}

// Check which button was clicked
function actionButtonsFn(event) {
    event.preventDefault();
    if (event.target.tagName === 'BUTTON') {
        const btnText = event.target.textContent;
        const tr = event.target.parentElement.parentElement;
        if (btnText === 'Delete') {
            deleteBookFn(tr);
        } else if (btnText === 'Edit') {
            generateEditForm(tr);
        }
    }
}

// Ggenerate new form and get id of the current book
function generateEditForm(tr) {
    const id = tr.children[2].children[0].id;
    const editForm = document.createElement('form');
    generateEl('h3', 'Edit FORM', editForm);
    generateEl('label', 'Title', editForm);
    generateEl('input', '', editForm, { name: 'title', value: tr.children[0].textContent });
    generateEl('label', 'Author', editForm);
    generateEl('input', '', editForm, { name: 'author', value: tr.children[1].textContent });
    const btnSave = generateEl('button', 'Save', editForm);

    form.replaceWith(editForm);
    btnSave.addEventListener('click', (e) => updateBookFn(e, id, editForm));
}

// Edit current book and send PUT request to the server
async function updateBookFn(event, id, editFormHTMLEl) {
    event.preventDefault();
    const editFormDat = new FormData(editFormHTMLEl);
    if (editFormDat.get('title') === '' || editFormDat.get('author') === '') {
        return;
    }

    editFormDat.set('title', editFormDat.get('title').trim());
    editFormDat.set('author', editFormDat.get('author').trim());

    try {
        const response = await fetch(URL_BOOKS + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(editFormDat))
        });
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }


    } catch (error) {
        table.textContent = error.message;
    }

    editFormHTMLEl.replaceWith(form);
    loadBooksFn();
}

// Delete current book
async function deleteBookFn(tr) {
    const id = tr.children[2].children[1].id;

    try {
        const response = await fetch(URL_BOOKS + '/' + id, {
            method: 'DELETE',
        });
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

    } catch (error) {
        table.textContent = error.message;
    }

    loadBooksFn();
}

// Generate HTML element
function generateEl(typeEl, content, parent, attributes) {
    const el = document.createElement(typeEl);
    el.textContent = content;
    if (attributes) {
        for (const prop in attributes) {
            el.setAttribute(prop, attributes[prop]);
        }
    }
    parent.appendChild(el);

    return el;
}

// For each book's buttons - addEventListener using Dlegetion
// 1.   Get all books by clicking on button [LAOD ALL ABOOKS]
// 1.1. Send a GET request to: http://localhost:3030/jsonstore/collections/books
// 2.   When the [SUBMIT] button is clicked, validate the input - no empty string
// 2.1. Send a POST request - JSON {author: 'New Author', title: 'New Title'}
// 3.   When the [EDIT] button is clicked on a book - send a PUT request to the same URL + (book id)
// 3.1. JSON {author: 'Changed Author', title: 'Changed Title'}
// 4.   When the [DELETE] button is clicked on a book - send a DELETE request to the same URL + (book id)
// 4.1  No confirmation needed