import { getMyEvent } from '../api/data.js';

let ctx = null;

const profileTemplate = (myEvents) => ctx.html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${ctx.userData.email}</h2>
    </div>
    <div class="board">
        ${myEvents.length === 0 
            ? ctx.html`<div class="no-events"><p>This user has no events yet!</p></div>`
            : myEvents.map(cardEvent)}
    </div>
</section>
`;

const cardEvent = (eventTheater) => ctx.html`
<div class="eventBoard">
    <div class="event-info">
        <img src="${eventTheater.imageUrl}">
        <h2>${eventTheater.title}</h2>
        <h6>${eventTheater.date}</h6>
        <a href="/details/${eventTheater._id}" class="details-button">Details</a>
    </div>
</div>
`;

export async function showProfile(context) {
    ctx = context;

    const myEvents = await getMyEvent(ctx.userData._id);
    ctx.render(profileTemplate(myEvents));
}