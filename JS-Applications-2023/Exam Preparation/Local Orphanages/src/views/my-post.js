import { getMyPosts } from '../api/data.js';

let ctx = null;

const myPostTemplate = (myPosts) => ctx.html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    <div class="my-posts">
    ${myPosts.length === 0 
            ? ctx.html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
            : myPosts.map(postCard)}
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

export async function myPostShow(context) {
    ctx = context;
    const userId = ctx.userData()?._id;
    const myPosts = await getMyPosts(userId);
    ctx.render(myPostTemplate(myPosts));
}