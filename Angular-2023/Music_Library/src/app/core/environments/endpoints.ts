export const endpoint = {
    register: 'users/register',
    login: 'users/login',
    logout: 'users/logout',
    getAllAlbums: 'data/albums?sortBy=_createdOn%20desc',
    createAlbum: 'data/albums',
    addlike: 'data/likes',
    updateAlbum: (albumId: string) => `data/albums/${albumId}`,
    deleteAlbum: (albumId: string) => `data/albums/${albumId}`,
    albumDetails: (albumId: string) => `data/albums/${albumId}`,
    getAllLikesCount: (albumId: string) => `data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    getLikeForUser: (albumId: string, userId: string) => `data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};