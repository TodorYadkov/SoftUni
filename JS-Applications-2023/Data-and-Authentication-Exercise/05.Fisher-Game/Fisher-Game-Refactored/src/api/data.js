import * as api from './api.js';

export async function getAllCatches() {
    return api.get('/data/catches');
}

export async function createNewCatch({ angler, bait, captureTime, location, species, weight }) {
    return api.post('/data/catches', { angler, bait, captureTime, location, species, weight });
}

export async function updateCatch(cathId, { angler, bait, captureTime, location, species, weight }) {
    return api.put(`/data/catches/${cathId}`, { angler, bait, captureTime, location, species, weight });
}

export async function deleteCatch(catchId) {
    return api.delete(`/data/catches/${catchId}`);
}