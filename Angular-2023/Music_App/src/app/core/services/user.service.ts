import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/interfaces';
import { CONSTANTS } from '../environments/constants';
import { endpoints } from '../environments/endpoint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  register(userInput: { email: string, password: string }): Observable<IUser> {
    const url = CONSTANTS.host_url + endpoints.register;
    return this.http.post<IUser>(url, userInput);
  }

  login(userInput: { email: string, password: string }): Observable<IUser> {
    const url = CONSTANTS.host_url + endpoints.login;
    return this.http.post<IUser>(url, userInput);
  }

  logout(): Observable<any> {
    const url = CONSTANTS.host_url + endpoints.logout;
    return this.http.get(url);
  }
}
