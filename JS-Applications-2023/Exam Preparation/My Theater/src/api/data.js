import { del, get, post, put } from './api.js';

export function getAllEvents() {
    return get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export function getEventById(theaterId) {
    return get(`/data/theaters/${theaterId}`);
}

export function getMyEvent(userId) {
    return get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export function createEvent(data) {
    return post('/data/theaters', data);
}

export function updateEvent(theaterId, data) {
    return put(`/data/theaters/${theaterId}`, data);
}

export function deleteEvent(theaterId) {
    return del(`/data/theaters/${theaterId}`);
}

export function getAllLikesForTheaterById(theaterId) {
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export function getAllLikesForUser(theaterId, userId) {
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export function addNewLike(theaterId) {
    return post('/data/likes', { theaterId });
}