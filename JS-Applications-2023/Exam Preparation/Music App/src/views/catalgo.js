import { getAllAlbums } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allAlbums, isLoggedIn) => ctx.html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${allAlbums.length === 0 
        ? ctx.html`<p>No Albums in Catalog!</p>`
        : allAlbums.map(album => cardAlbum(album, isLoggedIn))}   
</section>
`;

const cardAlbum = (album, isLoggedIn) => ctx.html`
<div class="card-box">
    <img src="${album.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${isLoggedIn !== false 
            ? ctx.html`
                <div class="btn-group">
                    <a href="/catalog/${album._id}" id="details">Details</a>
                </div>`
            : null}
    </div>
</div>
`;

export async function showCatalog(context) {
    ctx = context;
    const allAlbums = await getAllAlbums();
    const isLoggedIn = ctx.userData !== null;
    ctx.render(catalogTemplate(allAlbums, isLoggedIn));
}