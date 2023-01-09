function solve() {
    document.getElementById('add-worker').addEventListener('click', addWorkerFn);

    function addWorkerFn(event) {
        event.preventDefault();
        const sections = {
            tableRow: document.getElementById('tbody'),
            budgetSum: document.getElementById('sum'),
        };
        const inputs = {
            firstName: document.getElementById('fname'),
            lastName: document.getElementById('lname'),
            email: document.getElementById('email'),
            birth: document.getElementById('birth'),
            position: document.getElementById('position'),
            salary: document.getElementById('salary'),
        };
        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const email = inputs.email.value;
        const birth = inputs.birth.value;
        const position = inputs.position.value;
        const salary = inputs.salary.value;

        if (firstName === '' ||
            lastName === '' ||
            email === '' ||
            birth === '' ||
            position === '' ||
            salary === '') {
            return;
        }

        const tr = generateEl('tr', '', sections.tableRow);
        const tdFN = generateEl('td', firstName, tr);
        const tdLN = generateEl('td', lastName, tr);
        const tdE = generateEl('td', email, tr);
        const tdB = generateEl('td', birth, tr);
        const tdP = generateEl('td', position, tr);
        const tdS = generateEl('td', salary, tr);
        const tdBtns = generateEl('td', '', tr);
        const btnFired = generateEl('button', 'Fired', tdBtns, 'fired');
        const btnEdit = generateEl('button', 'Edit', tdBtns, 'edit');
        btnFired.addEventListener('click', firedFn);
        btnEdit.addEventListener('click', editFn);

        sections.budgetSum.textContent = (Number(sections.budgetSum.textContent) + Number(salary)).toFixed(2);
        // clear all inputs field
        for (let field in inputs) {
            inputs[field].value = '';
        }

        function editFn() {
            sections.tableRow.removeChild(tr);
            sections.budgetSum.textContent = (Number(sections.budgetSum.textContent) - Number(salary)).toFixed(2);
            inputs.firstName.value = firstName;
            inputs.lastName.value = lastName;
            inputs.email.value = email;
            inputs.birth.value = birth;
            inputs.position.value = position;
            inputs.salary.value = salary;
        }

        function firedFn() {
            sections.tableRow.removeChild(tr);
            sections.budgetSum.textContent = (Number(sections.budgetSum.textContent) - Number(salary)).toFixed(2);
        }
    }

    function generateEl(typeEl, content, parent, classN) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (classN) {
            el.className = classN;
        }

        parent.appendChild(el);
        return el;
    }
}
solve();