function solve() {
    const addToTheListBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    addToTheListBtn.addEventListener('click', addFn);
    resetBtn.addEventListener('click', resetFn);
    const inputs = {
        recipient: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message'),
    };

    const sections = {
        listMails: document.getElementById('list'),
        sentMails: document.querySelector('.sent-list'),
        trash: document.querySelector('.delete-list'),
    };
    // Add current email
    function addFn(event) {
        event.preventDefault();
        const recipient = inputs.recipient.value;
        const title = inputs.title.value;
        const message = inputs.message.value;
        // Check if the input fields are empty
        if (recipient === '' ||
            title === '' ||
            message === '') {
            return;
        }

        const li = generateEl('li', '', sections.listMails);
        const h4Title = generateEl('h4', `Title: ${title}`, li);
        const h4Recipient = generateEl('h4', `Recipient Name: ${recipient}`, li);
        const spanMessage = generateEl('span', message, li);
        const div = generateEl('div', '', li, true, { id: 'list-action' });
        const sendBtn = generateEl('button', 'Send', div, true, { type: 'submit', id: 'send' });
        const deleteBtn = generateEl('button', 'Delete', div, true, { type: 'submit', id: 'delete' });
        sendBtn.addEventListener('click', sendFn);
        deleteBtn.addEventListener('click', deleteFn);
        resetFn(event);

        function sendFn() {
            sections.listMails.removeChild(li);
            const liSent = generateEl('li', '', sections.sentMails);
            const spanTo = generateEl('span', `То: ${recipient}`, liSent);
            const spantTitle = generateEl('span', `Title: ${title}`, liSent);
            const div = generateEl('div', '', liSent, true, { class: 'btn' });
            deleteBtn.removeAttribute('id');
            deleteBtn.setAttribute('class','delete');
            div.appendChild(deleteBtn);
        }

        function deleteFn(event) {
            event.target.parentElement.parentElement.remove();
            const liSent = generateEl('li', '', sections.trash);
            const spanTo = generateEl('span', `То: ${recipient}`, liSent);
            const spantTitle = generateEl('span', `Title: ${title}`, liSent);
        }
    }
    // Clear all input fileds
    function resetFn(event) {
        event.preventDefault();
        for (let field in inputs) {
            inputs[field].value = '';
        }
    }
    // Create new element
    function generateEl(typeEl, content, parent, attribute, valueObj) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attribute) {
            for (let attr in valueObj) {
                el.setAttribute(attr, valueObj[attr]);
            }
        }

        parent.appendChild(el);
        return el;
    }
}
solve();