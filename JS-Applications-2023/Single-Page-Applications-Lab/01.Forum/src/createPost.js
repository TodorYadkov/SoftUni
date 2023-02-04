import { showComments } from './comments.js';
import { generateEl } from './dom.js';
import { homePage } from './source.js';

// Get user input to create new post and if the cancel button is clicked clear all fields
export function createNewPost(event) {
    event.preventDefault();
    const form = event.target.parentElement.parentElement;
    const targetId = event.target.id;

    if (targetId === 'submit') {
        const formData = Object.fromEntries(new FormData(form));
        for (const prop in formData) {
            if (formData[prop] === '') {
                return;
            }

            formData[prop] = formData[prop].trim();
        }

        fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                topicName: formData.topicName,
                username: formData.userName,
                postText: formData.postText,
                createDate: new Date(),
            })
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(`Error: ${response.statusText} - ${response.status}`);
                }
            })
            .catch(error => alert(error.message));
            
        form.reset();
        homePage();

    } else if (targetId === 'cancel') {
        // clear all fields in form
        form.reset();
    }
}

// Create post
export async function showPosts() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();

        // Generate HTML elements - post
        return Object.values(data).map(post => {

            const divTitle = generateEl('div', { prop: { className: 'topic-title' } });
            const divContainer = generateEl('div', { prop: { className: 'topic-container' } }, divTitle);
            const divWrapper = generateEl('div', { prop: { className: 'topic-name-wrapper' } }, divContainer);
            const divName = generateEl('div', { prop: { className: 'topic-name' } }, divWrapper);
            generateEl('h2', { prop: { textContent: post.topicName,  } },
                generateEl('a', { prop: { href: 'javascript:void(0)', className: 'normal' }, onClick: () => showComments(post._id) }, divName));
            const divColumns = generateEl('div', { prop: { className: 'columns' } }, divName);
            const div = generateEl('div', false, divColumns);
            generateEl('time', { prop: { textContent: post.createDate } },
                generateEl('p', { prop: { textContent: 'Date: ' } }, div));
            generateEl('span', { prop: { textContent: post.username } },
                generateEl('p', { prop: { textContent: 'Username: ' } },
                    generateEl('div', { prop: { className: 'nick-name' } }, div)));

            return divTitle;
        });

    } catch (error) {
        alert(error.message);
    }
}