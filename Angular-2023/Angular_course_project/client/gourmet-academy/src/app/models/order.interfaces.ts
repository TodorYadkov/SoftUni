import { IProduct } from "./product.interfaces";

export interface IOrder {
    _id: string;
    restaurantId: string;
    userId: string;
    addressDelivery: string;
    orders: string[];
};

export interface IOrderWithProducts {
    _id: string;
    restaurantId: string;
    userId: string;
    addressDelivery: string;
    orders: IProduct[];
};