import { del, get, post, put } from './api.js';

export function getAllAlbums() {
    return get('/data/albums?sortBy=_createdOn%20desc');
}

export function getAlbumById(albumId) {
    return get(`/data/albums/${albumId}`);
}

export function createAlbum(data) {
    return post('/data/albums', data);
}

export function updateAlbum(albumId, data) {
    return put(`/data/albums/${albumId}`, data);
}

export function deleteAlbum(albumId) {
    return del(`/data/albums/${albumId}`);
}

export function getAllLikesForOneAlbumById(albumId) {
    return get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export function getAllLikesForOneAlbumByIdForUser(albumId, userId) {
    return get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export function likeAlbum(albumId) {
    return post('/data/likes', { albumId });
}