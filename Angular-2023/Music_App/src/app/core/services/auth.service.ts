import { Injectable } from '@angular/core';
import { CONSTANTS } from '../environments/constants';
import { IUser } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUserToken(data: IUser) {
    localStorage.setItem(CONSTANTS.userTokenName, JSON.stringify(data));
  }

  getUserToken(): IUser | null {
    const token = localStorage.getItem(CONSTANTS.userTokenName);
    if (token) {
      return JSON.parse(token);
    }

    return null;
  }

  clearUserToken() {
    localStorage.removeItem(CONSTANTS.userTokenName);
  }

  get userStatus() {
    return localStorage.getItem(CONSTANTS.userTokenName) ? true : false;
  }
}
