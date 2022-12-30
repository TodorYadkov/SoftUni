window.addEventListener('load', solve);

function solve() {
    const btnNext = document.querySelector('#append-reservation #next-btn');
    btnNext.addEventListener('click', addReservation);

    function addReservation(event) {
        event.preventDefault();

        const input = {
            firstName: document.getElementById('first-name'),
            lastName: document.getElementById('last-name'),
            dateIn: document.getElementById('date-in'),
            dateOut: document.getElementById('date-out'),
            peopleCount: document.getElementById('people-count'),
            fullName() {
                return `${this.firstName.value} ${this.lastName.value}`;
            },
        };
        const sections = {
            infoReservation: document.querySelector('#info-reservations ul'),
            confirmReservation: document.querySelector('#confirm-reservations ul'),
            completeReservation: document.querySelector('#complete-reservation #verification'),
        };
        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const dateIn = new Date(input.dateIn.value);
        const dateOut = new Date(input.dateOut.value);
        const peopleCount = input.peopleCount.value;

        if (input.firstName.value === '' ||
            input.lastName.value === '' ||
            dateIn == 'Invalid Date' ||
            dateOut.value == 'Invalid Date' ||
            input.peopleCount.value === '' ||
            (dateIn < dateOut) == false
        ) {
            return;
        }

        const li = generateEl('li', null, sections.infoReservation, 'reservation-content');
        const article = generateEl('article', null, li);
        const h3 = generateEl('h3', `Name: ${input.fullName()}`, article);
        const fromDateP = generateEl('p', `From date: ${input.dateIn.value}`, article);
        const toDateP = generateEl('p', `To date: ${input.dateOut.value}`, article);
        const peopleCountP = generateEl('p', `For ${input.peopleCount.value} people`, article);
        const editBtn = generateEl('button', 'Edit', li, 'edit-btn');
        const continueBtn = generateEl('button', 'Continue', li, 'continue-btn');
        editBtn.addEventListener('click', editFn);
        continueBtn.addEventListener('click', continueFn);
        btnNext.disabled = true;

        // clear all fields
        for (let field in input) {
            input[field].value = '';
        }

        function editFn() {
            btnNext.disabled = false;
            sections.infoReservation.removeChild(li);
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.dateIn.value = dateIn.toISOString().split('T')[0];
            input.dateOut.value = dateOut.toISOString().split('T')[0];
            input.peopleCount.value = peopleCount;
        }

        function continueFn() {
            sections.confirmReservation.appendChild(li);
            editBtn.removeEventListener('click', editFn);
            continueBtn.removeEventListener('click', continueFn);

            editBtn.textContent = 'Confirm';
            editBtn.className = 'confirm-btn';
            editBtn.addEventListener('click', () => {
                btnNext.disabled = false;
                sections.confirmReservation.removeChild(li);
                sections.completeReservation.className = 'reservation-confirmed';
                sections.completeReservation.textContent = 'Confirmed.';
            });

            continueBtn.textContent = 'Cancel';
            continueBtn.className = 'cancel-btn';
            continueBtn.addEventListener('click', () => {
                btnNext.disabled = false;
                sections.confirmReservation.removeChild(li);
                sections.completeReservation.className = 'reservation-cancelled';
                sections.completeReservation.textContent = 'Cancelled.';
            });
        }
    }

    function generateEl(typeEl, content, parent, nameClass) {
        const el = document.createElement(typeEl);

        if (content) {
            el.textContent = content;
        }

        if (nameClass) {
            el.className = nameClass;
        }

        parent.appendChild(el);
        return el;
    }
}