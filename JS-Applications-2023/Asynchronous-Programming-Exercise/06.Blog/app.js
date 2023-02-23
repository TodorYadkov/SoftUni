const HOST = 'http://localhost:3030/jsonstore/blog/';
const post = document.getElementById('posts');
const postTitleH1 = document.getElementById('post-title');
const postContent = document.getElementById('post-body');
const postComments = document.getElementById('post-comments');
const btnLoadPosts = document.getElementById('btnLoadPosts');
const btnViewPost = document.getElementById('btnViewPost');
    
btnLoadPosts.addEventListener('click', loadPosts);
btnViewPost.addEventListener('click', loadComments);

async function loadPosts() {
    post.innerHTML = '';
    const endPoint = 'posts';
    const response = await fetch(HOST + endPoint);
    const data = await response.json();
    for (const prop in data) {
        const option = document.createElement('option');
        option.value = prop;
        option.textContent = data[prop].title;
        post.appendChild(option);
    }
}

async function loadComments(event) {
    postComments.innerHTML = '';

    const id = event.target.previousSibling.previousElementSibling.value;
    const name =  Array
    .from(event.target.previousSibling.previousElementSibling.options)
    .find(o => o.value === id).textContent;

    const endPointComment = 'comments';
    const endPointPost = 'posts';
    const [rComments, rPost] = await Promise.all([
        fetch(HOST + endPointComment),
        fetch(HOST + endPointPost)
    ]);

    const [dComments, dPost] = await Promise.all([
        rComments.json(),
        rPost.json()
    ]);
    
    const bodyTitle = Object.values(dPost)
      .find((obj) => obj.title === name);

    const foundComment = Object.values(dComments).filter(c => c.postId === id);

    postTitleH1.textContent = name;
    postContent.textContent = bodyTitle.body;

    foundComment.map(c => {
        const li = document.createElement('li');
        li.textContent = c.text;
        postComments.appendChild(li);
    });
}