import { CanActivateFn, Router } from '@angular/router';
import { UserManagementService } from '../services/userManage/user-management.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userManage = new UserManagementService();
  const isLogged = userManage.getUserStatus();
  if (isLogged) {
    return true;
  }

  const router = new Router();
  router.navigate(['login']);
  return false;
};
