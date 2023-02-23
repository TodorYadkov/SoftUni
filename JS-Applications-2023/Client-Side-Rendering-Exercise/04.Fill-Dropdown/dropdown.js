import { html, render } from '../../node_modules/lit-html/lit-html.js';

const selectMenu = document.querySelector('#menu');
const allOptions = [];

(async function () {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
        if (response.ok === false) {
            throw new Error(`Error: ${response.statusText} ${response.status}`);
        }

        const data = await response.json();

        for (const obj in data) {
            const name = data[obj].text;
            const id = data[obj]._id;
            allOptions.push(
                html`
            <option value="${id}">${name}</option>
            `);
        }

        render(allOptions, selectMenu);

    } catch (error) {
        alert(error.message);
    }

})();

document.querySelector('input[value="Add"]').addEventListener('click', addItem);

function addItem(event) {
    event.preventDefault();
    const userInput = document.querySelector('#itemText').value.trim();

    fetch('http://localhost:3030/jsonstore/advanced/dropdown/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: userInput,
        })
    })
        .then(response => {
            if (response.ok === false) {
                throw new Error(`Error: ${response.statusText} ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            allOptions.push(html`
                <option value="${data._id}">${data.text}</option>
            `);

            render(allOptions, selectMenu);
        })
        .catch(error => alert(error.message));

    document.querySelector('#itemText').value = '';
}