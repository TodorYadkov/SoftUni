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
    const selectedOpId = document.getElementById('posts').selectedOptions[0].value;
    const titleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postUlElement = document.getElementById('post-comments');

    const selectedPost = Object.values(cache).find(post => post.id === selectedOpId);
    titleElement.textContent = selectedPost.title;
    postBodyElement.textContent = selectedPost.body;

    postUlElement.innerHTML = '';


    const comments = Object.values(cache).filter(c => c.postId === selectedOpId);
    comments.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c.text;
        li.id = c.id;
        postUlElement.appendChild(li);
    });
});