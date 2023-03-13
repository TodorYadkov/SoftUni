import { searchAlbumByName } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const searchTemplate = (isLoggedIn, onSearch, foundAlbums) => ctx.html`
<section id="searchPage">
    <h1>Search by Name</h1>
    <div @click=${onSearch} class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list">Search</button>
    </div>
    <h2>Results:</h2>
    ${foundAlbums !== undefined 
        ? ctx.html`
            <div class="search-result">
            ${foundAlbums.length === 0 
                ? ctx.html`<p class="no-result">No result.</p>`
                : foundAlbums.map(f => searctResultCard(f, isLoggedIn))} 
            </div>` 
        : null}  
</section>
`;

const searctResultCard = (found, isLoggedIn) => ctx.html`
    <div class="card-box">
        <img src="${found.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${found.name}</p>
                <p class="artist">Artist: ${found.artist}</p>
                <p class="genre">Genre: ${found.genre}</p>
                <p class="price">Price: $${found.price}</p>
                <p class="date">Release Date: ${found.date}</p>
            </div>
            ${isLoggedIn !== false 
                ? ctx.html`
                    <div class="btn-group">
                        <a href="/catalog/${found._id}" id="details">Details</a>
                    </div>`
                : null}
        </div>
    </div>`;

export function showSearch(context) {
    ctx = context;
    const isLoggedIn = ctx.userData !== null;
    ctx.render(searchTemplate(isLoggedIn, onSearch));

    async function onSearch(event) {
        if (event.target.tagName === 'BUTTON') {
            const userInput = document.getElementById('search-input').value.trim();
            if (userInput === '') {
                alertFnMessage('The search field cannot be empty!');
                return;
            }

            const foundAlbums = await searchAlbumByName(userInput);
            ctx.render(searchTemplate(isLoggedIn, onSearch, foundAlbums));
        }
    }
}