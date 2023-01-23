const cache = {};
const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
(async function () {
    const postResponse = await fetch(postsUrl);
    const postData = await postResponse.json();

    const commentsResponse = await fetch(commentsUrl);
    const commentsData = await commentsResponse.json();
    Object.assign(cache, postData, commentsData);
})();

document.getElementById('btnLoadPosts').addEventListener('click', () => {
    const selectOp = document.getElementById('posts');
    selectOp.innerHTML = '';
    Object.values(cache).forEach(post => {
        if ((post.title !== undefined) && post.id) {
            const op = document.createElement('option');
            op.value = post.id;
            op.textContent = post.title;
            selectOp.appendChild(op);
        }
    });
});


document.getElementById('btnViewPost').addEventListener('click', () => {
    const selectedOpId = document.getElementById('posts').selectedOptions[0].value;
    const titleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postUlElement = document.getElementById('post-comments');
    
    titleElement.textContent = '';
    postUlElement.innerHTML = '';

    const selectedPost = Object.values(cache).find(post => post.id === selectedOpId);
    titleElement.textContent = selectedPost.title;
    postBodyElement.textContent = selectedPost.body;

    const comments = Object.values(cache).filter(c => c.postId === selectedOpId);
    comments.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c.text;
        postUlElement.appendChild(li);
    });
});