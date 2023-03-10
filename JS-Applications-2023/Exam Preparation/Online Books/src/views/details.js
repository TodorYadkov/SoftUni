import { addLike, getAllLikesForBookById, getLikeForUserById, getBookById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (bookDetails, isOwner, hasLike, countLikes) => ctx.html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${bookDetails.title}</h3>
        <p class="type">Type: ${bookDetails.type}</p>
        <p class="img"><img src="${bookDetails.imageUrl}"></p>
        <div class="actions">
            ${checkConditions(bookDetails._id, isOwner, hasLike)}
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${countLikes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${bookDetails.description}</p>
    </div>
</section>
`;

function checkConditions(bookId, isOwner, hasLike) {
    if (ctx.userData !== null) {
        if (isOwner) {
            return ctx.html`
                <a href="/edit/${bookId}" class="button">Edit</a>
                <a href="/delete/${bookId}" class="button">Delete</a>
                `;
        } else if (hasLike === false) {
            return ctx.html`
            <div id="action-buttons">
                <a @click=${async (e) => {
                    e.preventDefault();
                    const [_, countLikes] = await Promise.all([
                    addLike(bookId),
                    getAllLikesForBookById(bookId),
                    ]);
                    document.getElementById('total-likes').textContent = `Likes: ${countLikes}`;
                    document.getElementById('like-btn').style.display = 'none';
                }} id="like-btn" class="button" href="#">Like</a>
            </div>`;
        }
    }
    return '';
}

export async function showDetails(context) {
    ctx = context;
    const bookId = ctx.params.id;
    const [bookDetails, countLikes] = await Promise.all([
        getBookById(bookId),
        getAllLikesForBookById(bookId),
    ]);

    let countForUserLike = 0;
    if (ctx.userData !== null) {
        countForUserLike = await getLikeForUserById(bookId, ctx.userData._id);
    }

    const hasLike = countForUserLike > 0;
    const isOwner = ctx.userData?._id === bookDetails._ownerId;
    ctx.render(detailsTemplate(bookDetails, isOwner, hasLike, countLikes));
} 