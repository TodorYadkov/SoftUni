import { del, get, post, put } from './api.js';

export function getAllOffers() {
    return get('/data/offers?sortBy=_createdOn%20desc');
}

export function getOfferById(offerId) {
    return get(`/data/offers/${offerId}`);
}

export function createOffer(data) {
    return post('/data/offers', data);
}

export function updateOffer(offerId, data) {
    return put(`/data/offers/${offerId}`, data);
}

export function deleteOffer(offerId) {
    return del(`/data/offers/${offerId}`);
}

export function getAllApplyForOneOfferById(offerId) {
    return get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);
}

export function getAllAppliestForOneOfferByIdForUser(offerId, userId) {
    return get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export function applyOffer(offerId) {
    return post('/data/applications', { offerId });
}