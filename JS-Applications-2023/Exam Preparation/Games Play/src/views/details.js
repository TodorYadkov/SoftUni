import { postComment, getAllcommentsForGameById, getGameById } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const detailsTemplate = (gameDetails, allComments, isLoggedIn, isOwner, addComment) => ctx.html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
        <div class="game-header">
            <img class="game-img" src="${gameDetails.imageUrl}" />
            <h1>${gameDetails.title}</h1>
            <span class="levels">MaxLevel: ${gameDetails.maxLevel}</span>
            <p class="type">${gameDetails.category}</p>
        </div>
        <p class="text">${gameDetails.summary}</p>
        <!-- ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                ${allComments.length === 0 
                    ? ctx.html`<p class="no-comment">No comments.</p>`
                    : allComments.map(commentTemplate)}
            </ul>           
        </div>
        ${isOwner === true 
        ? ctx.html`
            <div class="buttons">
                <a href="/edit/${gameDetails._id}" class="button">Edit</a>
                <a href="/delete/${gameDetails._id}" class="button">Delete</a>
            </div>`
        : ''}
    </div>    
    ${isLoggedIn !== isOwner
        ? ctx.html`
            <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${addComment} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`
        : ''}            
</section>
`;

const commentTemplate = (comment) => ctx.html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>
`;

export async function showDetails(context) {
    ctx = context;
    const gameId = ctx.params.id;
    const [gameDetails, allComments] = await Promise.all([
        getGameById(gameId),
        getAllcommentsForGameById(gameId),
    ]);

    const isLoggedIn = ctx.userData !== null;
    const isOwner = ctx.userData?._id === gameDetails._ownerId;
    ctx.render(detailsTemplate(gameDetails, allComments, isLoggedIn, isOwner, addComment));

    async function addComment(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const comment = formData.get('comment');
        if (comment === '') {
            alertFnMessage('Comment cannot be empty!');
            return;
        }

        await postComment({gameId, comment});
        form.reset();
        ctx.page.redirect(`/catalog/${gameId}`);
    }
}