import * as api from './api.js';

const endPoint = {
    getAllIdeas: 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    createIdea: 'data/ideas',
    ideaDetails: 'data/ideas/',
    deleteIdea: 'data/ideas/',
};

export async function getAllIdeas() {
    const ideas = await api.get(endPoint.getAllIdeas);
    return ideas;
}

export async function createIdea(data) {
    const idea = await api.post(endPoint.createIdea, data);
    return idea;
}

export async function ideaDetails(ideaId) {
    const idea = await api.get(endPoint.ideaDetails + ideaId);
    return idea;
}

export async function deleteIdea(ideaId) {
    const idea = await api.delete(endPoint.deleteIdea + ideaId);
    return idea;
}