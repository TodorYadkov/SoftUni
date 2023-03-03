import { likeAlbum, getAllLikesForOneAlbumById, getAllLikesForOneAlbumByIdForUser, getAlbumById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (albumDetails, isOwner, hasBought, countLikes) => ctx.html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src="${albumDetails.imageUrl}" alt="${albumDetails.imageUrl}" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${albumDetails.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${albumDetails.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${albumDetails.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${albumDetails.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${albumDetails.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${countLikes}</span></div>
        ${checkConditions(albumDetails._id, isOwner, hasBought)}
    </div>
</section>
`;

function checkConditions(albumId, isOwner, hasLike) {
    if (ctx.userData !== null) {
        if (isOwner) {
            return ctx.html`
            <div id="action-buttons">
                <a href="/edit/${albumId}" id="edit-btn">Edit</a>
                <a href="/delete/${albumId}" id="delete-btn">Delete</a>
            </div>`;
        } else if (hasLike === false) {
            return ctx.html`
            <div id="action-buttons">
                <a @click=${async (e) => {
                    e.preventDefault();
                    const [like, countLike] = await Promise.all([
                    likeAlbum(albumId),
                    getAllLikesForOneAlbumById(albumId),
                    ]);
                    document.getElementById('likes-count').textContent = countLike;
                    document.getElementById('action-buttons').style.display = 'none';
                }} href="" id="like-btn">Like</a>
            </div>`;
        }
    }
    return '';
}

export async function showDetails(context) {
    ctx = context;
    const albumId = ctx.params.productId;
    const [albumDetails, countLikes] = await Promise.all([
        getAlbumById(albumId),
        getAllLikesForOneAlbumById(albumId),
    ]);

    let countForUserLike = 0;
    if (ctx.userData !== null) {
        countForUserLike = await getAllLikesForOneAlbumByIdForUser(albumId, ctx.userData._id);
    }

    const hasLike = countForUserLike > 0;
    const isOwner = ctx.userData?._id === albumDetails._ownerId;
    ctx.render(detailsTemplate(albumDetails, isOwner, hasLike, countLikes));
}