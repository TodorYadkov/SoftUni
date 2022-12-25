function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('#container #main button');

    for (let button of buttons) {
        button.addEventListener('click', messageEdit);
    }

    function messageEdit(event) {
        const typeOperation = event.target.textContent;
        const text = event.target.parentElement.querySelector('textarea');
        const decodeTextArea = event.target.parentElement.parentElement.children[1].querySelector('textarea');

        switch (typeOperation) {
            case 'Encode and send it':
                decodeTextArea.value = encodeFn(text.value);
                text.value = '';
                break;
            case 'Decode and read it':
                text.value = decodeFn(text.value);
                break;
        }
    }

    function encodeFn(message) {
        let encodedMessage = '';
        for (let char of message) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        return encodedMessage;
    }

    function decodeFn(encodedMessage) {
        let decodedMessage = '';
        for (let char of encodedMessage) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        return decodedMessage;
    }
}