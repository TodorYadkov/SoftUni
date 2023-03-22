import { getAllMembers, getAllTeams } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allTeams) => ctx.html`
<section id="browse">
    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    ${ctx.userData !== null 
        ? ctx.html`
            <article class="layout narrow">
                <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
            </article>`
        : null}
    ${allTeams.map(cardTeam)}
</section>
`;

const cardTeam = (team) => ctx.html`
<article class="layout">
    <img src="${team.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.count} Members</span>
        <div><a href="/catalog/${team._id}" class="action">See details</a></div>
    </div>
</article>
`;

export async function showCatalog(context) {
    ctx = context;
    

    const [allTeams, allMembers] = await Promise.all([
        getAllTeams(),
        getAllMembers()
    ]);
    
    // Check for a member for each team
    allTeams.forEach(t => {
        t.count = 0;
        allMembers.forEach(m => {
            if (t._id === m.teamId && m.status === 'member') {
                t.count++;
            }
        });
    });

    ctx.render(catalogTemplate(allTeams));
}