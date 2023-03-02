import { del, get, post, put } from './api.js';

export function getAllProducts() {
    return get('/data/products?sortBy=_createdOn%20desc');
}

export function getProductById(productId) {
    return get(`/data/products/${productId}`);
}

export function createProduct({ name, imageUrl, category, description, price }) {
    return post('/data/products', { name, imageUrl, category, description, price });
}

export function updateProduct(productId, { name, imageUrl, category, description, price }) {
    return put(`/data/products/${productId}`, { name, imageUrl, category, description, price });
}

export function deleteProduct(productId) {
    return del(`/data/products/${productId}`);
}

export function getAllBoughtForOneProductById(productId) {
    return get(`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`);
}

export function getAllBoughtForOneProductByIdForUser(productId, userId) {
    return get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export function buyProduct(productId) {
    return post('/data/bought', { productId });
}