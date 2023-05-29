import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { IUserInfo } from 'src/app/models/interfaces';
import { HOST_URL } from '../../environments/constant';
import { endpoints } from '../../environments/endPoints';
import { IUserModel } from 'src/app/models/user.model';
import { UserManagementService } from '../userManage/user-management.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private userManage: UserManagementService,
  ) { }

  register(userData: IUserModel): Observable<IUserInfo> {
    // const headers = this.createHeaders(this.userManage.getUserStatus()); \\ changed with auth.interceptors
    const body = JSON.stringify(userData);
    const url = HOST_URL + endpoints.register;
    return this.http.post<IUserInfo>(url, body);
  }

  login(userData: IUserModel): Observable<IUserInfo> {
    // const headers = this.createHeaders(this.userManage.getUserStatus()); \\ changed with auth.interceptors
    const body = JSON.stringify(userData);
    const url = HOST_URL + endpoints.login;
    return this.http.post<IUserInfo>(url, body);
  }

  logout() {
    // const headers = this.createHeaders(this.userManage.getUserStatus()); \\ changed with auth.interceptors
    const url = HOST_URL + endpoints.logout;
    return this.http.get(url);
  }

  // private createHeaders(type: IUserInfo | null): HttpHeaders { \\ changed with auth.interceptors
  //   if (type?.accessToken) {
  //     return new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'X-Authorization': type.accessToken,
  //     });
  //   }

  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  // }
}
