import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';
import { Router } from '@angular/router';
import { UserManagementService } from '../services/userManage/user-management.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  
  constructor(
    private authService: AuthService,
    private manageUser: UserManagementService,
    private router: Router,
  ) { }

  updateNavigation() {
    return !!this.manageUser.getUserStatus();
  }

  logout() {
    this.authService
      .logout()
      .subscribe({
        error: (error) => {
          this.manageUser.removeUserSession();
          console.error(error);
          this.router.navigate(['home']);
        },
        complete: () => {
          this.manageUser.removeUserSession();
          this.router.navigate(['home']);
        },
      });
  }
}