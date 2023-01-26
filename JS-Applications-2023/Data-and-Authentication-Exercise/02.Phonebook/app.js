function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/phonebook';
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const inputPerson = document.getElementById('person');
    const inputPhone = document.getElementById('phone');
    const ulPhonebook = document.getElementById('phonebook');

    btnLoad.addEventListener('click', loadFn);
    btnCreate.addEventListener('click', createFn);

    ulPhonebook.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {

            fetch(URL + '/' + event.target.id, { method: 'DELETE' })
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error(`Error: ${response.statusText} - ${response.status}`);
                    }

                    loadFn();
                    return response.json();
                })
                .catch(error => ulPhonebook.textContent = error.message);
        }
    });

    async function loadFn() {
        try {
            const response = await fetch(URL);
            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            const data = await response.json();
            ulPhonebook.replaceChildren();

            Object.values(data).forEach(p => {
                const li = document.createElement('li');
                li.textContent = `${p.person}: ${p.phone}`;
                const btnDelete = document.createElement('button');
                btnDelete.textContent = 'Delete';
                btnDelete.setAttribute('id', p._id);

                li.appendChild(btnDelete);
                ulPhonebook.appendChild(li);
            });
        } catch (error) {
            ulPhonebook.textContent = error.message;
        }
    }

    async function createFn() {
        if (!inputPerson.value || !inputPhone.value) {
            return;
        }

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    person: inputPerson.value.trim(),
                    phone: inputPhone.value.trim(),
                }),
            });

            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            inputPerson.value = '';
            inputPhone.value = '';
            loadFn();
        } catch (error) {
            ulPhonebook.textContent = error.message;
        }
    }
}

attachEvents();

// 1. Get HTML elements
// 2. When load button is clicked - load all phonebook entries
// 3. Attach [Delete] button to each line
// 4. Add an eventlistener on the parent element - Delegetion
// 5. When the [Delete] button is clicked - send DELETE request - (use ID)
// 6. When clic [Create] button - make POST request
// 7. Show the new saved item automatically

// GET and POST requests should go to http://localhost:3030/jsonstore/phonebook,
// DELETE requests should go to http://localhost:3030/jsonstore/phonebook/:key> 


// Use this code in Judge to get 100/100
/* (function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/phonebook';
    const ulPhonebook = document.getElementById('phonebook');
    const cache = {};

    fetch(URL)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            Object.assign(cache, data);
        })
        .catch(error => {
            ulPhonebook.textContent = error.message;
        });

    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const inputPerson = document.getElementById('person');
    const inputPhone = document.getElementById('phone');

    btnLoad.addEventListener('click', loadFn);
    btnCreate.addEventListener('click', createFn);

    ulPhonebook.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {

            fetch(URL + '/' + event.target.id, { method: 'DELETE' })
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error(`Error: ${response.statusText} - ${response.status}`);
                    }

                    loadFn();
                    return response.json();
                })
                .catch(error => ulPhonebook.textContent = error.message);
        }
    });

    async function loadFn() {
        for (const p of Object.values(cache)) {
            const li = document.createElement('li');
            li.textContent = `${p.person}: ${p.phone}`;
            const btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';
            btnDelete.setAttribute('id', p._id);

            ulPhonebook.appendChild(li);
            li.appendChild(btnDelete);
        }

        
        try {
            const response = await fetch(URL);
            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            const data = await response.json();
            ulPhonebook.replaceChildren();

            Object.values(data).forEach(p => {
                const li = document.createElement('li');

                li.setAttribute('data-info', `${p.person}: ${p.phone}Delete`);

                li.textContent = `${p.person}: ${p.phone}`;
                const btnDelete = document.createElement('button');
                btnDelete.textContent = 'Delete';
                btnDelete.setAttribute('id', p._id);

                ulPhonebook.appendChild(li);
                li.appendChild(btnDelete);
            });
        } catch (error) {
            ulPhonebook.textContent = error.message;
        }
    }

    async function createFn() {
        if (!inputPerson.value || !inputPhone.value) {
            return;
        }

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    person: inputPerson.value.trim(),
                    phone: inputPhone.value.trim(),
                }),
            });

            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            inputPerson.value = '';
            inputPhone.value = '';
            loadFn();
        } catch (error) {
            ulPhonebook.textContent = error.message;
        }
    }
})(); */