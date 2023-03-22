export const user = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
};

export const data = {
    getAllTeams: '/data/teams',
    getAllMembers: '/data/members?where=status%3D%22member%22',
    createTeam: '/data/teams',
    updateTeam: (teamId) => `/data/teams/${teamId}`,
    getTeam: (teamId) => `/data/teams/${teamId}`,
    addNewMember: '/data/members',
    approveRequest: (memberId) => `/data/members/${memberId}`,
    cancelRequest: (memberId) => `/data/members/${memberId}`,
    getAllTeamsOfUser: (userId) => `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`,
    getMembersForSpecificTeamById: (teamId) => `/data/members?where=${encodeURI(`teamId IN (${teamId}) AND status="member"`)}`,
    getPendingForSpecificTeamById: (teamId) => `/data/members?where=${encodeURI(`teamId IN (${teamId}) AND status="pending"`)}`,
    getAllTypesTeamMembers: (teamId) => `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`,
};
