import { generateEl, sections } from './dom.js';
import { homePage } from './source.js';

// To get postId
const formComment = document.getElementById('form-comment');

// Create new comment
export async function getUserInputComment(event) {
    event.preventDefault();

    if (event.target.tagName === 'BUTTON') {
        const postId = formComment.id;
        const form = event.target.parentElement;
        const formData = Object.fromEntries(new FormData(form));
        for (const prop in formData) {
            if (formData[prop] === '') {
                return;
            }

            formData[prop] = formData[prop].trim();
        }

        try {
            const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    postId,
                    userName: formData.userName,
                    comment: formData.commentText,
                    createDate: new Date(),
                }),
            });

            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            const data = await response.json();

        } catch (error) {
            alert(error.message);
        }

        form.reset();
        showComments(postId);
    }
}

// Show comments
export async function showComments(postId) {
    formComment.id = postId;
    sections.main.replaceChildren('Loading...');

    try {
        // Send two request to get specific post by id and all comments - (the server cannot select specific comments)
        const [res, commentsRes] = await Promise.all([
            fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`),
            fetch('http://localhost:3030/jsonstore/collections/myboard/comments')
        ]);

        if (res.status !== 200) {
            throw new Error(`Error: ${res.statusText} - ${res.status}`);
        }
        // Get data from server
        const [post, comments] = await Promise.all([
            res.json(),
            commentsRes.json()
        ]);
        // Filters comments
        const commentsThisPost = Object.values(comments).filter(c => c.postId === postId);
        // Generate HTML element for post and for each comment
        // Create post
        const divMain = generateEl('div');
        generateEl('h2', { prop: { textContent: post.topicName } },
            generateEl('a', { prop: { href: 'javascript:void(0)', className: 'normal' }, onClick: homePage },
                generateEl('div', { prop: { className: 'topic-name' } }, divMain)));

        const divHeader = generateEl('div', { prop: { className: 'header' } },
            generateEl('div', { prop: { className: 'comment' } }, divMain));

        generateEl('img', { prop: { src: './static/profile.png', alt: 'avatar' } }, divHeader);
        generateEl('p', { prop: { innerHTML: `<span>${post.username}</span> posted on <time>${post.createDate}</time>` } }, divHeader);
        generateEl('p', { prop: { textContent: post.postText, className: 'post-content' } }, divHeader);
        // Create comments
        const divTopicName = generateEl('div', { prop: { className: 'topic-name' } },
            generateEl('div', { prop: { className: 'topic-name-wrapper' } },
                generateEl('div', { prop: { id: 'user-comment' } }, divHeader)));
        // for each comment
        if (commentsThisPost.length === 0) {
            generateEl('p', { post: { textContent: 'There are no comments for the moment.Be the first to comment!' } }, divTopicName);
        } else {
            commentsThisPost.forEach(c => {
                generateEl('p', { prop: { innerHTML: `<strong>${c.userName}</strong> commented on <time>${c.createDate}</time>` } }, divTopicName);
                generateEl('p', { post: { textContent: c.comment } },
                    generateEl('div', { prop: { className: 'post-content' } }, divTopicName));
            });
        }

        sections.main.replaceChildren(divMain);
        sections.main.appendChild(sections.formComment);

    } catch (error) {
        alert(error.message);
    }
}