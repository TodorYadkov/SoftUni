import { del, get, post, put } from './api.js';

export function getAllPosts() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}

export function getPostById(postId) {
    return get(`/data/posts/${postId}`);
}

export function getMyPosts(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export function createPost(data) {
    return post('/data/posts', data);
}

export function updatePost(postId, data) {
    return put(`/data/posts/${postId}`, data);
}

export function deletePost(postId) {
    return del(`/data/posts/${postId}`);
}

export function makeDonation(postId) {
    return post('/data/donations', { postId });
}

export function getAllDonationsCount(postId) {
    return get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}

export function getDonationForSpecificUser(postId, userId) {
    return get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}