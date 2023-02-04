import { getUserInputComment } from './comments.js';
import { createNewPost } from './createPost.js';
import { homePage } from './source.js';

// Get HTML element
export const sections = {
    main: document.getElementById('main'),
    formTopic: document.getElementById('form-topic'),
    formComment: document.getElementById('form-comment'),
};

// Add event listener - using delegetion
sections.formTopic.addEventListener('click', createNewPost);
sections.formComment.addEventListener('click', getUserInputComment);

// Add event on [Home] button
document.getElementById('home-btn').addEventListener('click', () => {
    sections.main.replaceChildren();
    homePage();
});

// Generate HTML element
export function generateEl(typeEl, attributes, parentEl) {
    const el = document.createElement(typeEl);
    // 'attributes' must been an object
    if (attributes) {
        for (const key in attributes) {
            // to set at same time and textContent and event - use { prop:{ textContent: 'test' }, 'onClick:eventFn' }
            // to set properties only - use { prop:{ textContent: 'test' } }
            if (typeof attributes[key] === 'object') {
                // Set different attribute (class,textContent,etc.)
                Object.assign(el, attributes[key]);
            } else if (key.substring(0, 2) === 'on') {
                // Add an event listener if the first two strings are 'on'
                el.addEventListener(key.substring(2).toLocaleLowerCase(), attributes[key]);
            }
        }
    }

    if (parentEl) {
        parentEl.appendChild(el);
    }

    return el;
}

