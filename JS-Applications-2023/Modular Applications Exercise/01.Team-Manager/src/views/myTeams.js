import { getAllMembers, getOnlyUserTeams } from '../api/data.js';

let ctx = null;

const myTeamsTemplate = (allUserTeams) => ctx.html`
<section id="my-teams">
    <article class="pad-med">
        <h1>My Teams</h1>
    </article>
    ${allUserTeams.length === 0 
        ? ctx.html`
            <article class="layout narrow">
            <div class="pad-med">
                <p>You are not a member of any team yet.</p>
                <p><a href="/catalog">Browse all teams</a> to join one, or use the button bellow to cerate your own
                    team.</p>
            </div>
            <div class=""><a href="/create" class="action cta">Create Team</a></div>
            </article>`
        : allUserTeams.map(cardTeam)}
</section>
`;

const cardTeam = (t) => ctx.html`
<article class="layout">
    <img src="${t.team.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${t.team.name}</h2>
        <p>${t.team.description}</p>
        <span class="details">${t.count} Members</span>
        <div><a href="/catalog/${t.team._id}" class="action">See details</a></div>
    </div>
</article>
`;

export async function showMyTeams(context) {
    ctx = context;
    const allUserTeams = await getOnlyUserTeams(ctx.userData._id);
    const allMembers = await getAllMembers();
    
    
    // Check for a member for each team
    allUserTeams.forEach(t => {
        t.count = 0;
        allMembers.forEach(m => {
            if (t.team._id === m.teamId && m.status === 'member') {
                t.count++;
            }
        });
    });
    
    ctx.render(myTeamsTemplate(allUserTeams));
}