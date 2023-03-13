import { getAlbumsById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (albumDetails, isOwner) => ctx.html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${albumDetails.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">
                <h1>Name: ${albumDetails.name}</h1>
                <h3>Artist: ${albumDetails.artist}</h3>
                <h4>Genre:${albumDetails.genre}</h4>
                <h4>Price: $${albumDetails.price}</h4>
                <h4>Date: ${albumDetails.releaseDate}</h4>
                <p>${albumDetails.description}</p>
            </div>
            ${isOwner 
                ? ctx.html`
                    <div class="actionBtn">
                        <a href="/edit/${albumDetails._id}" class="edit">Edit</a>
                        <a href="/delete/${albumDetails._id}" class="remove">Delete</a>
                    </div>`
                : null}            
        </div>
    </div>
</section>
`;

export async function showDetails(context) {
    ctx = context;
    const albumId = ctx.params.id;
    const albumDetails = await getAlbumsById(albumId);
    const isOwner = ctx.userData?._id === albumDetails._ownerId;
    ctx.render(detailsTemplate(albumDetails, isOwner));
}