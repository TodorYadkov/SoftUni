import { IProduct } from "./product.interfaces";

export interface IUser {
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    _id: string;
    password: string;
};

export interface IUserToken {
    accessToken: string;
    userDetails: IUser;
};

export interface IUserBought {
    _id: string;
    restaurantId: string;
    userId: string;
    addressDelivery: string;
    orders: IProduct[];
}