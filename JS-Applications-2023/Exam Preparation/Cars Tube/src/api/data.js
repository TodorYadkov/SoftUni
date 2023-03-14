import { delete_, get, post, put } from './api.js';

const endPoints = {
    catalog: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    details: (id) => `/data/cars/${id}`,
    delete: (id) => `/data/cars/${id}`,
    edit: (id) => `/data/cars/${id}`,
    profile: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    search: (query) => `/data/cars?where=year%3D${query}`
};

export function getAllCars() {
    return get(endPoints.catalog);
}

export function getCarById(albumId) {
    return get(endPoints.details(albumId));
}

export function searchCarByYear(query) {
    return get(endPoints.search(query));
} 

export function getMyCar(userId) {
    return get(endPoints.profile(userId));
} 

export function createCar(data) {
    return post(endPoints.create, data);
}

export function updateCar(albumId, data) {
    return put(endPoints.edit(albumId), data);
}

export function deleteCar(albumId) {
    return delete_(endPoints.delete(albumId));
}
