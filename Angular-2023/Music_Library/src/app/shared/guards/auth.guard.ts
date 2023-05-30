import { CanActivateFn, Router } from '@angular/router';
import { USER_TOKEN } from 'src/app/core/environments/constants';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem(USER_TOKEN);
  if (user) {
    return true;
  }

  const router = new Router();
  router.navigate(['login']);
  return false;
};
