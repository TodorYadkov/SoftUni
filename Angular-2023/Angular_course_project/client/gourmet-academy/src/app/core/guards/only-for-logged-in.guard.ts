import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { Observable } from 'rxjs';

import { constants } from '../environments/constants';

@Injectable({ providedIn: 'root' })
export class onlyForLoggedInGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return (
      this.checkIfLogged(state.url) || this.router.createUrlTree(['/login'])
    );
  }

  checkIfLogged(url: string): boolean {
    const token = localStorage.getItem(constants.userTokenName);
    if (token) {

      return true;
    }

    return false;
  }
}