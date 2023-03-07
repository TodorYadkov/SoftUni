import { getAllPosts } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allPosts) => ctx.html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
        ${allPosts.length === 0 
            ? ctx.html`<h1 class="title no-posts-title">No posts yet!</h1>`
            : allPosts.map(postCard)}
    </div>
</section>
`;

const postCard = (post) => ctx.html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src="${post.imageUrl}" alt="${post.imageUrl}">
    <div class="btn-wrapper">
        <a href="/catalog/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>
`;

export async function catalogShow(context) {
    ctx = context;
    const allPosts = await getAllPosts();
    ctx.render(catalogTemplate(allPosts));
}