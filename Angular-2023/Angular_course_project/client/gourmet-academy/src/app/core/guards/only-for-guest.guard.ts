import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { Observable } from 'rxjs';

import { constants } from '../environments/constants';

@Injectable({ providedIn: 'root' })
export class onlyForGuestGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    const token = localStorage.getItem(constants.userTokenName);
    if (!token) {
      return true;
    }

    return this.router.createUrlTree(['/not-found']);
  }
}
