import { del, get, post, put } from './api.js';

export function getShoeById(shoeId) {
    return get(`/data/shoes/${shoeId}`);
}

export function getAllShoes() {
    return get('/data/shoes?sortBy=_createdOn%20desc');
}

export function getSearchedShoes(queryStr) {
    return get(`/data/shoes?where=brand%20LIKE%20%22${queryStr}%22`);
}

export function createShoe(data) {
    return post('/data/shoes', data);
}

export function updateShoe(shoeId, data) {
    return put(`/data/shoes/${shoeId}`, data);
}

export function deleteShoe(shoeId) {
    return del(`/data/shoes/${shoeId}`);
}