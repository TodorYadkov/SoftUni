import { addNewLike, getAllLikesForTheaterById, getAllLikesForUser, getEventById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (theaterDetails, isOwner, hasLike, countLikes) => ctx.html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theaterDetails.title}</h1>
            <div>
                <img src="${theaterDetails.imageUrl}" />
            </div>
        </div>
        <div class="details">
            <h3>Theater Description</h3>
            <p>${theaterDetails.description}</p>
            <h4>Date: ${theaterDetails.date}</h4>
            <h4>Author: ${theaterDetails.author}</h4>
            ${checkConditions(theaterDetails._id, isOwner, hasLike)}
            <p class="likes">Likes: ${countLikes}</p>
        </div>
    </div>
</section>
`;

function checkConditions(theaterId, isOwner, hasLike) {
    if (ctx.userData !== null) {
        if (isOwner) {
            return ctx.html`
                <div class="buttons">
                    <a class="btn-delete" href="/delete/${theaterId}">Delete</a>
                    <a class="btn-edit" href="/edit/${theaterId}">Edit</a>
                </div>
                `;
        } else if (hasLike === false) {
            return ctx.html`
            <div class="buttons">
                <a @click=${(e)=> addLike(e, theaterId)} class="btn-like" href="#">Like</a>
            </div>`;
        }
    }

    return '';

    async function addLike(event, theaterId) {
        event.preventDefault();
        // Only for Judge
        event.target.remove();
        const count = Number(document.querySelector('.likes').textContent.split('Likes: ')[1]);
        document.querySelector('.likes').textContent = `Likes: ${count + 1}`;

        const [_unused, countLikes] = await Promise.all([
            addNewLike(theaterId),
            getAllLikesForTheaterById(theaterId),
        ]);

        document.querySelector('.buttons').style.display = 'none';
        // document.querySelector('.likes').textContent = `Likes: ${countLikes}`;
    }
}

export async function showDetails(context) {
    ctx = context;
    const theaterId = ctx.params.id;
    const [theaterDetails, countLikes] = await Promise.all([
        getEventById(theaterId),
        getAllLikesForTheaterById(theaterId),
    ]);

    let countForUserLike = 0;
    if (ctx.userData !== null) {
        countForUserLike = await getAllLikesForUser(theaterId, ctx.userData._id);
    }

    const hasLike = countForUserLike > 0;
    const isOwner = ctx.userData?._id === theaterDetails._ownerId;
    ctx.render(detailsTemplate(theaterDetails, isOwner, hasLike, countLikes));
}












/* const tamplate = (theatr, isOwner, isLoggedIn, totalLikesCount, onClickLike, didUserLike) => ctx.html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theatr.title}</h1>
            <div>
                <img src="${theatr.imageUrl}" />
            </div>
        </div>
        <div class="details">
            <h3>Theater Description</h3>
            <p>${theatr.description}</p>
            <h4>Date: ${theatr.date}</h4>
            <h4>Author: ${theatr.author}</h4>
            <div class="buttons">
                ${isOwner ? 
                ctx.html `<a class="btn-delete" href="/delete/${theatr._id}">Delete</a>
                <a class="btn-edit" href="/edit/${theatr._id}">Edit</a>` : ''}
            
                ${(() => {
                if (didUserLike == 0) {
                    if (isLoggedIn && !isOwner) {        
                        return ctx.html`<a class="btn-like" @click=${onClickLike} href="javascript:void(0)">Like</a>`;
                    }
                }
            })()}
                <span class="likes">Likes: ${totalLikesCount}</span>
            </div>
        </div>
    </div>
</section>
`;


export async function showDetails(context) {
    ctx = context;
    const theaterId = ctx.params.id;
    const theatr = await getEventById(theaterId);
    const user = ctx.userData;

    let userId;
    let totalLikesCount;
    let didUserLike;

    if (user != null) {
        userId = user._id;
        didUserLike = await getAllLikesForUser(theaterId, userId);
    }

    const isOwner = user && theatr._ownerId == user._id;
    const isLoggedIn = user !== null;

    totalLikesCount = await getAllLikesForTheaterById(theaterId);
    update();

    async function onClickLike() {

        await addNewLike(theaterId);

        totalLikesCount = await getAllLikesForTheaterById(theaterId);
        didUserLike = await getAllLikesForUser(theaterId, userId);
        update();
    }

    async function update() {
        ctx.render(tamplate(theatr, isOwner, isLoggedIn, totalLikesCount, onClickLike, didUserLike));
    }
} */