function lockedProfile() {
    // Modify example to work like other
    const radioExample = document.querySelector('#main div input[name="user1Locked"]');
    const divExampleUserMoreInfo = document.querySelector('#main div .user1Username');
    divExampleUserMoreInfo.style.display = 'none';
    document.querySelector('#main div input[name="user1Username"]').value = 'Example';
    document.querySelector('#main div input[name="user1Email"]').value = 'example@test.js';
    document.querySelector('#main div input[name="user1Age"]').value = '20';
    const btnExampleUser = document.querySelector('#main div button');
    btnExampleUser.addEventListener('click', () => { changeState([radioExample.checked, divExampleUserMoreInfo, btnExampleUser]); });

    // Invoke a new async function IIFE to get other profiles from the server
    (async function () {
        // Get the new elements with fetch
        const URL_PROFILE = 'http://localhost:3030/jsonstore/advanced/profiles';

        try {
            // Get promise
            const response = await fetch(URL_PROFILE);
            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }
            // Get data
            const data = await response.json();
            // Create HTML elements for each profile
            const parentEl = document.getElementById('main');
            for (let obj of Object.values(data)) {
                const divProfile = generateEl('div', '', parentEl, { class: 'profile' });
                generateEl('img', '', divProfile, { src: './iconProfile2.png', class: 'userIcon' });
                generateEl('label', 'Lock', divProfile);
                const radioLock = generateEl('input', '', divProfile, { type: 'radio', name: `${obj.username}`, value: 'lock', checked: '' });
                generateEl('label', 'Unlock', divProfile);
                generateEl('input', '', divProfile, { type: 'radio', name: `${obj.username}`, value: 'unlock' });
                generateEl('br', '', divProfile);
                generateEl('hr', '', divProfile);
                generateEl('label', 'Username', divProfile);
                generateEl('input', '', divProfile, { type: 'text', name: `${obj.username}`, value: `${obj.username}`, disabled: '', readonly: '' });
                const divHideInfo = generateEl('div', '', divProfile, { id: `${obj.username}HiddenFields`, style: 'display: none;' });
                generateEl('hr', '', divHideInfo);
                generateEl('label', 'Email', divHideInfo);
                generateEl('input', '', divHideInfo, { type: 'email', name: `${obj.username}Email`, value: `${obj.email}`, disabled: '', readonly: '' });
                generateEl('label', 'Age', divHideInfo);
                generateEl('input', '', divHideInfo, { type: 'text', name: `${obj.username}Age`, value: `${obj.age}`, disabled: '', readonly: '' });
                const btnShowMore = generateEl('button', 'Show more', divProfile);
                btnShowMore.addEventListener('click', () => { changeState([radioLock.checked, divHideInfo, btnShowMore]); });
            }
        } catch (error) {
            const main = document.getElementById('main');
            main.innerHTML = '';
            main.textContent = error.message;
        }
    })();

    function changeState([isLocked, div, btn]) {
        if (isLocked === false) {
            div.style.display === 'none' ? div.style.display = 'block' : div.style.display = 'none';
            btn.textContent === 'Show more' ? btn.textContent = 'Hide it' : btn.textContent = 'Show more';
        }
    }

    function generateEl(typeEl, content, parentEl, attributes) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attributes) {
            for (const attr in attributes) {
                el.setAttribute(attr, attributes[attr]);
            }
        }

        parentEl.appendChild(el);
        return el;
    }
}