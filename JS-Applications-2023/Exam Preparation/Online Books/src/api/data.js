import { del, get, post, put } from './api.js';

export function getAllBooks() {
    return get('/data/books?sortBy=_createdOn%20desc');
}

export function getBookById(bookId) {
    return get(`/data/books/${bookId}`);
}

export function getMyBooks(userId) {
    return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export function createBook(data) {
    return post('/data/books', data);
}

export function updateBook(bookId, data) {
    return put(`/data/books/${bookId}`, data);
}

export function deleteBook(bookId) {
    return del(`/data/books/${bookId}`);
}

export function getAllLikesForBookById(bookId) {
    return get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
}

export function getLikeForUserById(bookId, userId) {
    return get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export function addLike(bookId) {
    return post('/data/likes', { bookId });
} 