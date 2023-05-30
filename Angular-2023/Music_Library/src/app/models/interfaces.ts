export interface IUserInfo {
  email: string;
  _id: string;
  accessToken: string;
}

export interface IAlbum {
  _id: string;
  _ownerId: string;
  singer: string;
  album: string;
  imageUrl: string;
  release: string;
  label: string;
  sales: string;
  _createdOn: number;
}[]