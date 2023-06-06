export const endpoints = {
    register: 'users/register',
    login: 'users/login',
    logout: 'users/logout',
    catalog: 'data/albums?sortBy=_createdOn%20desc&distinct=name',
    create: 'data/albums',
    details: (albumId: string) => `data/albums/${albumId}`,
    edit: (albumId: string) => `data/albums/${albumId}`,
    delete: (albumId: string) => `data/albums/${albumId}`,
    search: (query: string) => `data/albums?where=name%20LIKE%20%22${query}%22`,
};