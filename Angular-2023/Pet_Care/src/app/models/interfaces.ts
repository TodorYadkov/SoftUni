export interface IUserInfo {
  email: string;
  _id: string;
  accessToken: string;
}

export interface IPets {
  _ownerId: string;
  name: string;
  breed: string;
  age: string;
  weight: string;
  image: string;
  _createdOn: number;
  _id: string;
}[]
