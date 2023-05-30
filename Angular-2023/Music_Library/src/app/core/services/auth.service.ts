import { Injectable } from '@angular/core';
import { USER_TOKEN } from '../environments/constants';
import { IUserInfo } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  getUserStatus(): boolean {
    return localStorage.getItem(USER_TOKEN) ? true : false;
  }

  getUserInfo(): IUserInfo | null {
    const user = localStorage.getItem(USER_TOKEN);
    if (user) {
      return JSON.parse(localStorage.getItem(USER_TOKEN)!);
    } else {
      return null;
    }
  }

  setUserToken(userData: IUserInfo) {
    localStorage.setItem(USER_TOKEN, JSON.stringify(userData));
  }

  removeUserToken() {
    localStorage.removeItem(USER_TOKEN);
  }
}
