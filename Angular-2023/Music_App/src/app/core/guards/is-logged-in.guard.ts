import { CanActivateFn, Router } from '@angular/router';
import { CONSTANTS } from '../environments/constants';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem(CONSTANTS.userTokenName);
  if (token) {
    return true;
  }

  const router = new Router;
  router.navigate(['login']);
  return false;
};
