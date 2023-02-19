window.addEventListener('load', solve);

function solve() {
    // Get outputs
    const sections = {
        body: document.getElementById('body'),
        mainDiv: document.getElementById('main'),
        previewTicket: document.querySelector('#info-ticket .ticket-info-list'),
        confirmTicket: document.querySelector('#confirm-ticket-section .confirm-ticket'),
    };

    // Get user inputs
    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        countPeople: document.getElementById('people-count'),
        date: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count'),
    };

    // Add event listener on [Next step] btn
    const nextStepBtn = document.getElementById('next-btn');
    nextStepBtn.addEventListener('click', nextStepFn);

    function nextStepFn(event) {
        event.preventDefault();

        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const countPeople = inputs.countPeople.value;
        const date = inputs.date.value;
        const daysCount = inputs.daysCount.value;

        if (firstName === ''
            || lastName === ''
            || date === ''
            || countPeople === ''
            || daysCount === '') {
            return;
        }

        const li = genareteHTMLEl('li', '', sections.previewTicket, { class: 'ticket' });
        const article = genareteHTMLEl('article', '', li);
        genareteHTMLEl('h3', `Name: ${firstName} ${lastName}`, article);
        genareteHTMLEl('p', `From date: ${date}`, article);
        genareteHTMLEl('p', `For ${daysCount} days`, article);
        genareteHTMLEl('p', `For ${countPeople} people`, article);
        const editBtn = genareteHTMLEl('button', 'Edit', li, { class: 'edit-btn' });
        const continueBtn = genareteHTMLEl('button', 'Continue', li, { class: 'continue-btn' });

        // Add events
        editBtn.addEventListener('click', editFn);
        continueBtn.addEventListener('click', continueFn);

        // Disabled [Next step] btn
        nextStepBtn.disabled = true;

        // Clear all inputs field
        for (const field in inputs) {
            inputs[field].value = '';
        }

        // Function
        function editFn() {
            nextStepBtn.disabled = false;
            li.remove();

            inputs.firstName.value = firstName;
            inputs.lastName.value = lastName;
            inputs.date.value = date;
            inputs.countPeople.value = countPeople;
            inputs.daysCount.value = daysCount;
        }

        function continueFn() {
            editBtn.remove();
            continueBtn.remove();
            // Generate new btns
            const confirmBtn = genareteHTMLEl('button', 'Confirm', li, { class: 'confirm-btn' });
            const cancelBtn = genareteHTMLEl('button', 'Cancel', li, { class: 'cancel-btn' });
            // Change class
            li.className = 'ticket-content';
            sections.confirmTicket.appendChild(li);

            // Add events
            confirmBtn.addEventListener('click', confirmFn);
            cancelBtn.addEventListener('click', cancelFn);
        }

        function cancelFn() {
            li.remove();
            nextStepBtn.disabled = false;
        }

        function confirmFn() {
            sections.mainDiv.remove();
            const h1 = genareteHTMLEl('h1', 'Thank you, have a nice day!', sections.body, { id: 'thank-you' });
            const backButton = genareteHTMLEl('button', 'Back', sections.body, { id: 'back-btn' });
            backButton.addEventListener('click', () => location.reload());
        }
    }

    // Generate HTML El
    function genareteHTMLEl(typeEl, content, parent, attributes) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attributes) {
            for (const prop in attributes) {
                el.setAttribute(prop, attributes[prop]);
            }
        }

        if (parent) {
            parent.appendChild(el);
        }

        return el;
    }
}




