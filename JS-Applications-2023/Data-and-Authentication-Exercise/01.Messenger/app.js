function attachEvents() {
    const divControls = document.getElementById('controls');
    const textArea = document.getElementById('messages');
    const btnSubmit = document.getElementById('submit');
    const btnRefresh = document.getElementById('refresh');
    const inputName = document.querySelector('[name="author"]');
    const inputContent = document.querySelector('[name="content"]');
    const URL = 'http://localhost:3030/jsonstore/messenger';

    divControls.addEventListener('click', (e) => {
        if (e.target === btnSubmit) {
            onSubmit();
        } else if (e.target === btnRefresh) {
            onRefresh();
        }
    });
    // Get all messages (using fetch.then.catch)
    function onRefresh() {
        fetch(URL)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(`Error: ${response.statusText} - ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const messages = Object.values(data).map(m => `${m.author}: ${m.content}`);
                textArea.value = messages.join('\n');
            })
            .catch(error => {
                textArea.value = error.message;
            });
    }

    // Send a new message to the base (using async/await)
    async function onSubmit() {
        //Check for an empty string
        if (!inputName.value || !inputContent.value) {
            return;
        }
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author: inputName.value.trim(),
                    content: inputContent.value.trim(),
                }),
            });
            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            const data = await response.json();
            // Auto refresh
            onRefresh();
     	    // Clear input fields
            inputName.value = '';
            inputContent.value = '';
        } catch (error) {
            textArea.value = error.message;
        }
    }
}

attachEvents();

// 1. Get the html elements
// 2. Add eventlistener using Delegetion
// 3. Get all messages with a GET request from http://localhost:3030/jsonstore/messenger
// 4. Make a POST request to save the new message
// 5. Automatic refresh when saving a new message
