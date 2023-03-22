import { data as endPoint } from './requests.js';
import { methods } from './api.js';

export async function getTeamById(teamId) {
    return methods.get(endPoint.getTeam(teamId));
}

export async function getAllTeams() {
    return methods.get(endPoint.getAllTeams);
}

export async function getAllMembers() {
    return methods.get(endPoint.getAllMembers);
}

export async function getOnlyUserTeams(userId) {
    return methods.get(endPoint.getAllTeamsOfUser(userId));
}

export async function getAllMembersTypeForTeam(teamId) {
    return methods.get(endPoint.getAllTypesTeamMembers(teamId));
}

export async function createTeam(dataObj) {
    return methods.post(endPoint.createTeam, dataObj);
}

export async function addMember(teamId) {
    return methods.post(endPoint.addNewMember, { teamId });
}

export async function editTeam(teamId, dataObj) {
    return methods.put(endPoint.updateTeam(teamId), dataObj);
}

export async function approveMember(memberId) {
    const status = 'member';
    return methods.put(endPoint.approveRequest(memberId), { status });
}

export async function cancelRequest(memberId) {
    return methods.delete(endPoint.cancelRequest(memberId));
}