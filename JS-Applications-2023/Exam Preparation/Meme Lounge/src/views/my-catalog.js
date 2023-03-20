import { getMyMemes } from '../api/data.js';

let ctx = null;

const myCatalogTemplate = (myMemes) => ctx.html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${ctx.userData.gender}.png">
        <div class="user-content">
            <p>Username: ${ctx.userData.username}</p>
            <p>Email: ${ctx.userData.email}</p>
            <p>My memes count: ${myMemes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
    ${myMemes.length === 0 
        ? ctx.html`<p class="no-memes">No memes in database.</p>`
        : myMemes.map(cardMeme)} 
    </div>
</section>
`;

const cardMeme = (meme) => ctx.html`
   <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
        <a class="button" href="/catalog/${meme._id}">Details</a>
    </div>
`;

export async function showMyCatalog(context) {
    ctx = context;

    const myMemes = await getMyMemes(ctx.userData._id);
    ctx.render(myCatalogTemplate(myMemes));
}