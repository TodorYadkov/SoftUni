window.addEventListener('load', onLoad);
document.querySelector('#form').addEventListener('submit', addStudent);

const table = document.querySelector('#results tbody');
const URL_STUDENTS = 'http://localhost:3030/jsonstore/collections/students';

async function onLoad() {
    // Remove all the childrens from table
    table.replaceChildren();

    try {
        const response = await fetch(URL_STUDENTS);
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();
        Object.values(data).forEach(student => {
            const tr = document.createElement('tr');
            generateEl('td', student.firstName, tr);
            generateEl('td', student.lastName, tr);
            generateEl('td', student.facultyNumber, tr);
            generateEl('td', student.grade, tr);
            table.appendChild(tr);
        });

    } catch (error) {
        table.textContent = error.message;
    }
}

async function addStudent(event) {
    event.preventDefault();
    const inputs = Object.fromEntries(new FormData(document.getElementById('form')));
    for (const prop in inputs) {
        if (inputs[prop] === '' || isNaN(Number(inputs.facultyNumber)) || isNaN(Number(inputs.grade))) {
            return;
        }

        inputs[prop] = inputs[prop].trim();
    }

    try {
        const response = await fetch(URL_STUDENTS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.assign({}, inputs))
        });
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        onLoad();
    } catch (error) {
        table.textContent = error.message;
    }

}

function generateEl(typeEl, content, parent) {
    const el = document.createElement(typeEl);
    el.textContent = content;
    parent.appendChild(el);

    return el;
}

// 1. Get HTML elements
// 2. Load all students from base
// 3. Validate the input field - it is not an empty string
// 4. Add students to the base with POST request
// 5. Display the newly added students in the table