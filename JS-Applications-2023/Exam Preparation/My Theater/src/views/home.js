import { getAllEvents } from '../api/data.js';

let ctx = null;

const homeTemplate = (allEvents) => ctx.html`
<section class="welcomePage">
    <div id="welcomeMessage">
        <h1>My Theater</h1>
        <p>Since 1962 World Theatre Day has been celebrated by ITI Centres, ITI Cooperating Members, theatre
            professionals, theatre organizations, theatre universities and theatre lovers all over the world on
            the 27th of March. This day is a celebration for those who can see the value and importance of the
            art
            form “theatre”, and acts as a wake-up-call for governments, politicians and institutions which have
            not
            yet recognised its value to the people and to the individual and have not yet realised its potential
            for
            economic growth.</p>
    </div>
    <div id="events">
        <h1>Future Events</h1>
        <div class="theaters-container">
            ${allEvents.length === 0 
                ? ctx.html`<h4 class="no-event">No Events Yet...</h4>`
                : allEvents.map(eventCard)}
        </div>
    </div>
</section>
`;

const eventCard = (eventTheater) => ctx.html`
<div class="eventsInfo">
    <div class="home-image">
        <img src="${eventTheater.imageUrl}">
    </div>
    <div class="info">
        <h4 class="title">${eventTheater.title}</h4>
        <h6 class="date">${eventTheater.date}</h6>
        <h6 class="author">${eventTheater.author}</h6>
        <div class="info-buttons">
            <a class="btn-details" href="/details/${eventTheater._id}">Details</a>
        </div>
    </div>
</div>
`;

export async function showHome(context) {
    ctx = context;
    const allEvents = await getAllEvents();
    ctx.render(homeTemplate(allEvents));
}  