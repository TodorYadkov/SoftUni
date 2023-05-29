import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserManagementService } from '../services/userManage/user-management.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private manageUser: UserManagementService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.manageUser.getUserStatus();
    if (!!userToken) {
     req = req.clone({
        setHeaders: {
          'X-Authorization': userToken.accessToken,
          'Content-Type': 'application/json',
        }
      });
    } else {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
        }
      });
    }

    return next.handle(req);
  }
}
