import { addMember, approveMember, cancelRequest, getAllMembers, getAllMembersTypeForTeam, getTeamById } from '../api/data.js';

let ctx = null;

const detailsTemplate = (teamDetails, allMembersForTeam, actions) => ctx.html`
<section id="team-home">
    <article class="layout">
        <img src="${teamDetails.logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${teamDetails.name}</h2>
            <p>${teamDetails.description}</p>
            <span class="details">${teamDetails.count} Members</span>
            ${teamDetails.isGuest === false 
            ? ctx.html`
            <div>
                ${teamDetails.isOwner 
                    ? ctx.html`<a href="/catalog/${teamDetails._id}/edit" class="action">Edit team</a>` : null}
                ${teamDetails.isMember === false 
                    && teamDetails.isPending === false 
                    && teamDetails.isOwner === false 
                    ? ctx.html`<a href="javascript:void(0)" class="action" 
                        @click=${async () => await actions.joinToTeam()}>Join team</a>` : null}
                ${teamDetails.isMember 
                    ? ctx.html`<a href="javascript:void(0)" class="action invert" 
                        @click=${async () => await actions.leaveTeam(allMembersForTeam)}>Leave team</a>` : null}
                ${teamDetails.isPending 
                    ? ctx.html`Membership pending. <a href="javascript:void(0)" 
                        @click=${async () => await actions.removeMyRequest(allMembersForTeam)}>Cancel request</a>` : null}
            </div>`
            : null}
        </div>
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                ${displayMember(allMembersForTeam, teamDetails, actions)}
            </ul>
        </div>
        ${teamDetails.isOwner
        ? ctx.html`
        <div class="pad-large">
            <h3>Membership Requests</h3>
            <ul class="tm-members">
                ${displayMembershipRequests(allMembersForTeam, actions)}
            </ul>
        </div>`
        : null}
    </article>
</section>
`;

function displayMember(allMembersForTeam, teamDetails, actions) {
    return allMembersForTeam.map(member => {
        if ((teamDetails.isGuest || teamDetails.isUser) && (teamDetails.isOwner === false) && (member.status !== 'pending')) {
            return ctx.html`<li>${member.user.username}</li>`;
        } else if (member.status === 'member') {
            return ctx.html`
                ${teamDetails.isOwner && (member._ownerId !== ctx.userData._id)
                ? ctx.html`<li>${member.user.username}<a href="javascript:void(0)" class="tm-control action"
                    @click=${async () => await actions.removeRequest(member._id)}>Remove from team</a></li>`
                : ctx.html`<li>${member.user.username}</li>`}
                `;
    }});
}

function displayMembershipRequests(allMembersForTeam, actions) {
    const onlyPendingStatus = allMembersForTeam.filter(m => m.status === 'pending');
    if (onlyPendingStatus.length === 0) {
        return '';
    }

    return onlyPendingStatus.map(m => ctx.html`
    <li>${m.user.username}
        <a href="javascript:void(0)" class="tm-control action"
            @click=${async () => await actions.approveMembership(m._id)}>Approve</a>
        <a href="javascript:void(0)"class="tm-control action" 
            @click=${async () => await actions.removeRequest(m._id)}>Decline</a>
    </li>`);
}

export async function showDetails(context) {
    ctx = context;
    const teamId = ctx.params.id;
    const actions = {
        joinToTeam,
        leaveTeam,
        removeRequest,
        removeMyRequest,
        approveMembership,
    };

    updateView();
    async function updateView() {
        const [teamDetails, allMembersForTeam, allMembers] = await Promise.all([
            getTeamById(teamId),
            getAllMembersTypeForTeam(teamId),
            getAllMembers(),
        ]);
    
        // Check user status
        teamDetails.isGuest = ctx.userData === null;                                                            // check is guest
        teamDetails.isOwner = ctx.userData?._id === teamDetails._ownerId;                                       // check is owner
        teamDetails.isPending = (ctx.userData?._id !== teamDetails._ownerId)                                    // check if the status is pending
            && (allMembersForTeam.some(m => (m._ownerId === ctx.userData?._id) && (m.status === 'pending')));
        teamDetails.isMember = (ctx.userData?._id !== teamDetails._ownerId)                                     // check is already a member
            && (allMembersForTeam.some(m => (m._ownerId === ctx.userData?._id) && (m.status === 'member')));
        teamDetails.isUser = (ctx.userData !== null)
            && (ctx.userData._id !== teamDetails._ownerId)                                                      // check is user
            && (allMembersForTeam.every(m => m.user._id !== ctx.userData?._id));
    
        // Check the number of team members
        teamDetails.count = 0;
        allMembers.forEach(m => {
            if (teamId === m.teamId && m.status === 'member') {
                teamDetails.count++;
            }
        });

        ctx.render(detailsTemplate(teamDetails, allMembersForTeam, actions));
    }

    async function joinToTeam() {
        await addMember(teamId);
        updateView();
    }

    async function leaveTeam(allMembersForTeam) {
        const member = allMembersForTeam.find(m => m._ownerId === ctx.userData._id);
        await cancelRequest(member._id);
        updateView();
    }

    async function removeMyRequest(allMembersForTeam) {
        const member = allMembersForTeam.find(m => (m._ownerId === ctx.userData._id && m.status === 'pending'));
        await cancelRequest(member._id);
        updateView();
    }

    async function removeRequest(memberId) {
        await cancelRequest(memberId);
        updateView();
    }

    async function approveMembership(memberId) {
        await approveMember(memberId);
        updateView();
    }
}