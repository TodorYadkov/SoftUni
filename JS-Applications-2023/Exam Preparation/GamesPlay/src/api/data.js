import { del, get, post, put } from './api.js';

export function getAllGames() {
    return get('/data/games?sortBy=_createdOn%20desc');
}

export function getNewGames() {
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export function getGameById(gameId) {
    return get(`/data/games/${gameId}`);
}

export function createGame(data) {
    return post('/data/games', data);
}

export function updateGame(gameId, data) {
    return put(`/data/games/${gameId}`, data);
}

export function deleteGame(gameId) {
    return del(`/data/games/${gameId}`);
}

export function getAllcommentsForGameById(gameId) {
    return get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}

export function postComment({ gameId, comment }) {
    return post('/data/comments', { gameId, comment });
} 