function solution() {
    const addGiftBtn = document.querySelector('.card button');
    addGiftBtn.addEventListener('click', addGiftFn);
    const sections = {
        listOfGifts: document.querySelectorAll('.card ul')[0],
        sentGifts: document.querySelectorAll('.card ul')[1],
        discardedGifts: document.querySelectorAll('.card ul')[2],
    };

    function addGiftFn() {
        const inputField = document.querySelector('.card input[placeholder="Gift name"]');
        const li = generateEl('li', '', sections.listOfGifts, { class: 'gift' });
        li.textContent = inputField.value;
        const sendBtn = generateEl('button', 'Send', li, { id: 'sendButton' });
        const discardBtn = generateEl('button', 'Discard', li, { id: 'discardButton' });
        sendBtn.addEventListener('click', sendGiftFn);
        discardBtn.addEventListener('click', discardGiftFn);
        inputField.value = '';
        // Sort list of gifts ASC
        Array.from(sections.listOfGifts.children)
            .sort((a, b) => a.firstChild.nodeValue.localeCompare(b.firstChild.nodeValue))
            .forEach(el => sections.listOfGifts.appendChild(el));

        function sendGiftFn() {
            sendBtn.remove();
            discardBtn.remove();
            sections.sentGifts.appendChild(li);
        }

        function discardGiftFn() {
            sendBtn.remove();
            discardBtn.remove();
            sections.discardedGifts.appendChild(li);
        }
    }

    function generateEl(typeEl, content, parent, attributes) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (Object.keys(attributes).length !== 0) {
            for (let attribute in attributes) {
                el.setAttribute(attribute, attributes[attribute]);
            }
        }

        parent.appendChild(el);
        return el;
    }
}