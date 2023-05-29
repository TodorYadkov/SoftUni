import { Injectable } from '@angular/core';
import { IUserInfo } from 'src/app/models/interfaces';
import { USER_TOKEN } from '../../environments/constant';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor() { }

  setUserSession(userData: IUserInfo) {
    localStorage.setItem(USER_TOKEN, JSON.stringify(userData));
  }

  removeUserSession() {
    localStorage.removeItem(USER_TOKEN);
  }

  getUserStatus(): IUserInfo | null {
    const userData = localStorage.getItem(USER_TOKEN);
    return !!userData ? JSON.parse(userData) : null;
  }
}