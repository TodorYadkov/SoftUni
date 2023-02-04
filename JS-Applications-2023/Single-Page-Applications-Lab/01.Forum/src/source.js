import { sections } from './dom.js';
import { showPosts } from './createPost.js';

window.addEventListener('load', homePage);

export async function homePage() {
    sections.main.replaceChildren();
    sections.main.appendChild(sections.formTopic);
    sections.main.append(...await showPosts());
}

// This task is to write functionality for a public forum.
// This app doesn't need any registration. Every user is able to read and write in the forum,
// and by creating a post or topic, the user should write also his/her own name.
// Steps:
// 1. On the home page there are all topics visible.
// 2. Creating a new topic with a title, username and post (comment) in it
// 3. The button "Post" should create the new topic
// 4. The button "Cancel" only clears all the input fields, without sending any request to the server.
// 5. When the user selects a topic by clicking on it, the app should redirect to a page with all posts
//    (comments) for the selected topic and a form for creating new post (comment).
// 6. After typing in the comment and sending the POST request to the server the page should render updated view with the new post.

// URL to create topics: http://localhost:3030/jsonstore/collections/myboard/posts
// URL to create comments: http://localhost:3030/jsonstore/collections/myboard/comments