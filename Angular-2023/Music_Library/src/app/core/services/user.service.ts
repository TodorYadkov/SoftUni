import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserInfo } from 'src/app/models/interfaces';
import { User } from 'src/app/models/userModel';
import { HOST_URL } from '../environments/constants';
import { endpoint } from '../environments/endpoints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(userInput: User): Observable<IUserInfo> {
    const url = HOST_URL + endpoint.register;
    return this.http.post<IUserInfo>(url, userInput);
  }

  login(userInput: User): Observable<IUserInfo> {
    const url = HOST_URL + endpoint.login;
    return this.http.post<IUserInfo>(url, userInput);
  }

  logout(): Observable<any> {
    const url = HOST_URL + endpoint.logout;
    return this.http.get(url);
  }
}
