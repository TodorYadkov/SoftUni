import { del, get, post, put } from './api.js';

export function getAllPets() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export function getPetById(petId) {
    return get(`/data/pets/${petId}`);
}

export function createPet(data) {
    return post('/data/pets', data);
}

export function updatePet(petId, data) {
    return put(`/data/pets/${petId}`, data);
}

export function deletePet(petId) {
    return del(`/data/pets/${petId}`);
}

export function getAllDonation(petId) {
    return get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export function getAllDonationForUser(petId, userId) {
    return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export function addDonation(petId) {
    return post('/data/donation', { petId });
} 