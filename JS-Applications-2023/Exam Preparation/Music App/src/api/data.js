import { delete_, get, post, put } from './api.js';

const endPoints = {
    catalog: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/albums',
    details: (id) => `/data/albums/${id}`,
    edit: (id) => `/data/albums/${id}`,
    delete: (id) => `/data/albums/${id}`,
    search: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`
};

export function getAllAlbums() {
    return get(endPoints.catalog);
}

export function getAlbumsById(albumId) {
    return get(endPoints.details(albumId));
}

export function createAlbum(data) {
    return post(endPoints.create, data);
}

export function updateAlbum(albumId, data) {
    return put(endPoints.edit(albumId), data);
}

export function deleteAlbum(albumId) {
    return delete_(endPoints.delete(albumId));
}

export function searchAlbumByName(query) {
    return get(endPoints.search(query));
}