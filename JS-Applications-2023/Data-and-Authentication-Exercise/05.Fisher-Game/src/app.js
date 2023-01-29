window.addEventListener('load', checkUserStatus);
const [btnHome, btnLogout, btnLogin, btnRegister] = [...document.querySelectorAll('a')];
const btnLoadAll = document.querySelector('#home-view>aside>button');

btnLogout.addEventListener('click', logoutFn);
btnLoadAll.addEventListener('click', loadAll);

// Check if the user is logged or not
function checkUserStatus() {
    if (sessionStorage.getItem('accessToken') === null) {
        btnHome.style = 'pointer-events: none';
        btnLogout.style.display = 'none';
        // btnRegister.style = 'pointer-events: none'; // Enable for Judge
        const p = document.createElement('p');
        p.className = 'email';
        p.textContent = 'Please login';
        p.style.webkitTextFillColor = 'red';

        document.querySelector('nav>p').replaceWith(p);
        btnLogin.addEventListener('click', () => window.location = 'login.html');
        return;
    }
    // Enable the [Add] button and attach an event listener
    const btnAdd = document.querySelector('#addForm button');
    btnAdd.disabled = false;
    btnAdd.addEventListener('click', addCatche);
    // Hide [Login] and [Register] buttons
    document.querySelector('#guest').style.display = 'none';
    // Display the user name from seesion storage
    document.querySelector('nav>p>span').textContent = sessionStorage.getItem('userName');
}

// Logout and clear all session information
function logoutFn() {
    fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('accessToken'),
        }
    })
        .then(response => {
            if (response.status !== 204) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            sessionStorage.clear();
            window.location = 'index.html';
        })
        .catch(error => alert(error.message));
}

// Add a new catch to the base
async function addCatche(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(document.getElementById('addForm')));
    // Check for an empty string
    for (const prop in formData) {
        if (formData[prop] === '') {
            return;
        }

        formData[prop] = formData[prop].trim();
    }

    try {
        const response = await fetch('http://localhost:3030/data/catches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('accessToken'),
            },
            body: JSON.stringify(formData),
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        // Clear all input fields
        Array.from(document.getElementById('addForm')).forEach(el => {
            if (el.tagName === 'INPUT') {
                el.value = '';
            }
        });

        loadAll();
    } catch (error) {
        alert(error.message);
    }
}

// Display all catches
async function loadAll() {
    const parentEl = document.getElementById('catches');
    parentEl.addEventListener('click', actionButton);
    // Clear all current content
    parentEl.replaceChildren();

    try {
        const response = await fetch('http://localhost:3030/data/catches');
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();

        // Create list of catches
        for (const objInfo of data) {
            const div = generateEl('div', '', parentEl, { class: 'catch' });
            generateEl('label', 'Angler', div);
            generateEl('input', '', div, { type: 'text', class: 'angler', value: objInfo['angler'] });
            generateEl('label', 'Weight', div);
            generateEl('input', '', div, { type: 'text', class: 'weight', value: objInfo['weight'] });
            generateEl('label', 'Species', div);
            generateEl('input', '', div, { type: 'text', class: 'species', value: objInfo['species'] });
            generateEl('label', 'Location', div);
            generateEl('input', '', div, { type: 'text', class: 'location', value: objInfo['location'] });
            generateEl('label', 'Bait', div);
            generateEl('input', '', div, { type: 'text', class: 'bait', value: objInfo['bait'] });
            generateEl('label', 'Capture Time', div);
            generateEl('input', '', div, { type: 'text', class: 'captureTime', value: objInfo['captureTime'] });
            // Check if the current user is the owner of the post
            const isDisbled = sessionStorage.getItem('idOwner') === objInfo['_ownerId'] ? false : true;
            const btnUpdate = generateEl('button', 'Update', div, { class: 'update', 'data-id': objInfo['_id'] });
            const btnDelete = generateEl('button', 'Delete', div, { class: 'delete', 'data-id': objInfo['_id'] });
            btnUpdate.disabled = isDisbled;
            btnDelete.disabled = isDisbled;
        }

    } catch (error) {
        generateEl('p', error.message, parentEl);
    }
}

// Select which button is clicked [Update] or [Delete]
function actionButton(event) {
    if (event.target.tagName === 'BUTTON') {
        const btnName = event.target.textContent;
        const idElement = event.target.getAttribute('data-id');

        if (btnName === 'Update') {
            const everyInputFields = event.target.parentElement.children;
            const inputs = Array
                .from(everyInputFields)
                .reduce((acc, currEl) => {
                    // Search <input> element
                    if (currEl.tagName === 'INPUT') {
                        // Add to the object each new input
                        acc[currEl.className] = currEl.value.trim();
                    }
                    // return object
                    return acc;
                }, {});

            updateFn(JSON.stringify(inputs), idElement);
        } else if (btnName === 'Delete') {

            deleteFn(idElement);
        }
    }
}

// Update current element
async function updateFn(JSONElement, idElement) {
    try {
        const response = await fetch(`http://localhost:3030/data/catches/${idElement}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('accessToken'),
            },
            body: JSONElement
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        loadAll();
    } catch (error) {
        alert(error.message);
    }
}

// Delete current element
async function deleteFn(idElement) {
    try {
        const response = await fetch(`http://localhost:3030/data/catches/${idElement}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('accessToken'),
            }
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        loadAll();
    } catch (error) {
        alert(error.message);
    }
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

// 1.   Get HTML Elements
// Login - POST request: http://localhost:3030/users/login
// 2.   After a successful login keep the user data in the browser's session or locale storage
// 2.1. Display the home page
// 2.2. In case of error, an appropriate error message should be displayed and the user should be able to fill in the login form again
// 2.3. If the user is not logged in, all the buttons should be disabled except the "LOAD" button.
// Register - GET request: http://localhost:3030/users/register
// 3.   In case of error (eg. invalid username/password), an appropriate error message should be displayed, and the user should be able to try to register again
// 3.1. After a successful registration the home page should be displayed
// 3.2. Keep the user data in the browser's session or local storage
// Logout - GET request: http://localhost:3030/users/logout
// 4.1. Clear any session information you’ve stored in browser storage
// 4.2. Redirect the user to the Home page and change the button in navigation

// Each catch should have:
// <div class="catch">
//     <label>Angler</label>
//     <input type="text" class="angler" value="${angler}">
//     <label>Weight</label>
//     <input type="text" class="weight" value="${weight}">
//     <label>Species</label>
//     <input type="text" class="species" value="${species}">
//     <label>Location</label>
//     <input type="text" class="location" value="${location}">
//     <label>Bait</label>
//     <input type="text" class="bait" value="${bait}">
//     <label>Capture Time</label>
//     <input type="number" class="captureTime" value="${captureTime}">
//     <button class="update" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Update</button>
//     <button class="delete" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Delete</button>
// </div>
// •	angler - string representing the name of the person who caught the fish
// •	weight - floating-point number representing the weight of the fish in kilograms
// •	species - string representing the name of the fish species
// •	location - string representing the location where the fish was caught
// •	bait - string representing the bait used to catch the fish
// •	captureTime - integer number representing the time needed to catch the fish in minutes
// Create a New Catch
// 5.   Pressing the [Add] button should submit a new catch with the values of the inputs in the fieldset with id="addFrom". (Only for logged in users)
// 5.1. Button [Add] should be disabled in there are no logged in user
// 5.2. POST request: - http://localhost:3030/users/catches
// 5.3. Request body (JSON): {"angler":"…", "weight":…, "species":"…", "location":"…", "bait":"…", "captureTime":…}
// Load catches
// 6.   Pressing the [Load] button should list all catches. (For all users)
// 6.2. List All Catches - GET request: http://localhost:3030/data/catches
// Update a Catch
// 7.   Pressing the [Update] button should send a PUT request, updating the catch - only for the creator of the catch
// 7.1. Update a Catch - PUT request: http://localhost:3030/data/catches/:id
// 7.2. Request body (JSON): {"angler":"…", "weight":…, "species":"…", "location":"…", "bait":"…", "captureTime":…}
// Delete a Catch
// 8.   Pressing the [Delete] button should delete the catch - only for the creator of the catch
// 8.1  Delete a catch - DELETE request: http://localhost:3030/data/catches/:id

// -    GET request:    http://localhost:3030/users/login
// -    GET request:    http://localhost:3030/users/logout
// -    POST request:   http://localhost:3030/users/register
// -    PUT request:    http://localhost:3030/data/catches/:id
// -    DELETE request: http://localhost:3030/data/catches/:id