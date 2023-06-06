export interface IUser {
    email: string;
    _id: string;
    accessToken: string;
}

export interface IAlbum {
    _ownerId: string;
    name: string;
    artist: string;
    genre: string;
    imgUrl: string;
    price: number;
    releaseDate: string;
    description: string;
    _createdOn: number;
    _id: string;
}[]