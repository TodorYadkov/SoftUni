import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEnvironments } from 'src/app/models/environment.interfaces';
import { constants, endpoints } from '../../environments/constants';
import { IAllRestaurants, IRestaurant } from 'src/app/models/restaurant.interfaces';
import { IOrderWithProducts } from 'src/app/models/order.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  // Get environment variable from server
  getAPIKeys(): Observable<IEnvironments> {
    const url = constants.hostBackEnd + endpoints.getApiKeys;
    return this.http.get<IEnvironments>(url);
  }
  //  Get all restaurant from server default with pagination
  getRestaurantsByPagination(page: string, limit: string): Observable<IAllRestaurants> {
    // --> Send with query - http://localhost:3000/restaurants?page=1&limit=6 : default values page: 1, limit: 6
    const url = constants.hostBackEnd + endpoints.getAllRestaurants(page, limit);
    return this.http.get<IAllRestaurants>(url);
  }
  // Get restaurants by search
  getRestaurantsBySearch(restaurantName: string, location: string): Observable<IRestaurant[]> {
    const url = constants.hostBackEnd + endpoints.getRestaurantsBySearch(restaurantName, location);
    return this.http.get<IRestaurant[]>(url);
  }
  // Create Restaurant
  createRestaurant(userInput: IRestaurant): Observable<IRestaurant> {
    const url = constants.hostBackEnd + endpoints.addNewRestaurant;
    return this.http.post<IRestaurant>(url, userInput);
  }
  // Get usersRestaurants
  getUserRestaurants(userId: string): Observable<IRestaurant[]> {
    const url = constants.hostBackEnd + endpoints.getUserRestaurants(userId);
    return this.http.get<IRestaurant[]>(url);
  }
  // Get orders from restaurant
  getRestaurantOrders(restaurantId: string): Observable<IOrderWithProducts[]> {
    const url = constants.hostBackEnd + endpoints.getRestaurantOrders(restaurantId);
    return this.http.get<IOrderWithProducts[]>(url);
  }


}
