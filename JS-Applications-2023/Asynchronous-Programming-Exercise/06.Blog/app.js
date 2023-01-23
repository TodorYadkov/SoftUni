const cache = {};

document.getElementById('btnLoadPosts').addEventListener('click', async () => {
    if (Object.keys(cache).length !== 0) {
        return;
    }

    const postResponse = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const postData = await postResponse.json();

    const commentsResponse = await fetch('http://localhost:3030/jsonstore/blog/comments');
    const commentsData = await commentsResponse.json();

    Object.assign(cache, postData, commentsData);

    const selectOp = document.getElementById('posts');
    selectOp.innerHTML = '';
    Object.values(cache).forEach(post => {
        if (post.title !== undefined) {
            const op = document.createElement('option');
            op.textContent = post.title;
            op.value = post.id;
            selectOp.appendChild(op);
        }
    });
});

document.getElementById('btnViewPost').addEventListener('click', () => {
    const selectedOp = document.getElementById('posts').selectedOptions[0];
    const titleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postUlElement = document.getElementById('post-comments');

    const selectedPost = Object.values(cache).find(post => post.id === selectedOp.value);
    titleElement.textContent = selectedPost.title;
    postBodyElement.textContent = selectedPost.body;

    postUlElement.innerHTML = '';

    const comments = Object.values(cache).filter(c => c.postId === selectedOp.value);
    comments.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c.text;
        li.id = c.id;
        postUlElement.appendChild(li);
    });
});



// Working code for Judge SoftUni
/* (function () {
    document.getElementById('btnLoadPosts').addEventListener('click', async () => {
        const postResponse = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const postData = await postResponse.json();

        const selectOp = document.getElementById('posts');
        selectOp.innerHTML = '';
        Object.values(postData).forEach(post => {
            if (post.title !== undefined) {
                const op = document.createElement('option');
                op.textContent = post.title;
                op.value = post.id;
                op.setAttribute('data-body', post.body);
                selectOp.appendChild(op);
            }
        });
    });

    document.getElementById('btnViewPost').addEventListener('click', async () => {
        const postUlElement = document.getElementById('post-comments');
        const selectedOp = document.getElementById('posts').selectedOptions[0];

        document.getElementById('post-title').textContent = selectedOp.text;
        document.getElementById('post-body').textContent = selectedOp.getAttribute('data-body');

        const commentsResponse = await fetch('http://localhost:3030/jsonstore/blog/comments');
        const commentsData = await commentsResponse.json();

        postUlElement.innerHTML = '';

        const comments = Object.values(commentsData).filter(c => c.postId === selectedOp.value);
        comments.forEach(c => {
            const li = document.createElement('li');
            li.textContent = c.text;
            li.id = c.id;
            postUlElement.appendChild(li);
        });
    });
})(); */


// Solution with fetch.then.catch
/* function attachEvents() {
    // URL to the server
    const URL_POSTS = 'http://localhost:3030/jsonstore/blog/posts';
    const URL_COMMENTS = 'http://localhost:3030/jsonstore/blog/comments';
    // Get all needed output fields in one object
    const sections = {
        optionSelect: document.getElementById('posts'),
        h1PostTitle: document.getElementById('post-title'),
        pContentPost: document.getElementById('post-body'),
        ulComments: document.getElementById('post-comments'),
    };
    // Get the buttons and add an event listener to each of them
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    btnLoadPosts.addEventListener('click', loadPostsFn);
    btnViewPost.addEventListener('click', viewPostFN);
    // Add as an HTML option element - each received title from the server
    function loadPostsFn() {
        // Check if current items are loaded - do nothing
        if (sections.optionSelect.value.length !== 0) {
            return;
        }

        // Make a request to the server and if valid add a new option
        fetch(URL_POSTS)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(`Error: ${response.statusText} - ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                for (let post in data) {
                    generateEl('option', data[post].title, sections.optionSelect, { value: `${data[post].id}` });
                }
            })
            .catch(error => sections.h1PostTitle.textContent = error.message);
    }
    // Show more information about the currently selected post and show comments
    function viewPostFN(event) {
        // Get the ID of the currently selected option
        const postID = event.target.previousElementSibling.value;
        // Get element option to get its text content and set in h1 Post Title field
        const currentPost = Array.from(event.target.previousElementSibling).find(op => op.getAttribute('value') === postID);
        if (sections.h1PostTitle.textContent === currentPost.textContent) {
            return;
        }
        // Add new content
        sections.h1PostTitle.textContent = currentPost.textContent;

        // Clear output fields without 'selection <option>'
        sections.pContentPost.innerHTML = '';
        sections.ulComments.innerHTML = '';

        // Make a request to the server and, if valid, display the comments and more information about the post
        fetch(URL_COMMENTS)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(`Error: ${response.statusText} - ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Add in a new paragraph complete content of the current post with a new request to the server
                fetch(URL_POSTS)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error(`Error: ${response.statusText} - ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        for (let prop in data) {
                            if (data[prop].id === postID) {
                                // Add content to paragraph
                                sections.pContentPost.textContent = data[prop].body;
                            }
                        }
                    })
                    .catch(error => sections.h1PostTitle.textContent = error.message);

                // Check if there are comments to the current post, and if there are, we add them in a new li element
                for (const prop in data) {
                    if (data[prop].postId === postID) {
                        // Add each comment with its content
                        generateEl('li', data[prop].text, sections.ulComments, { id: data[prop].id });
                    }
                }
            })
            .catch(error => sections.h1PostTitle.textContent = error.message);
    }
    // Function to generate a new HTML element
    function generateEl(typeEl, content, parent, attributes) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attributes) {
            for (let prop in attributes) {
                el.setAttribute(prop, attributes[prop]);
            }
        }

        parent.appendChild(el);
        return el;
    }
}
attachEvents(); */