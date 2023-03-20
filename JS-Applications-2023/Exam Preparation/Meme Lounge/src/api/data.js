import { delete_, get, post, put } from './api.js';

const endPoints = {
    memes: '/data/memes?sortBy=_createdOn%20desc',
    create: '/data/memes',
    details: (id) => `/data/memes/${id}`,
    update: (id) => `/data/memes/${id}`,
    delete: (id) => `/data/memes/${id}`,
    profile: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export function getMeme(memeId) {
    return get(endPoints.details(memeId));
}

export function getAllMemes() {
    return get(endPoints.memes);
}

export function getMyMemes(userId) {
    return get(endPoints.profile(userId));
}

export function createMeme(title, description, imageUrl) {
    return post(endPoints.create, { title, description, imageUrl });
}

export function updateMeme(memeId, title, description, imageUrl) {
    return put(endPoints.update(memeId), { title, description, imageUrl });
}

export function deleteMeme(memeId) {
    return delete_(endPoints.delete(memeId));
}