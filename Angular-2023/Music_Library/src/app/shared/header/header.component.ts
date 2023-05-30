import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) { }

  updateNavigation(): boolean {
    return this.authService.getUserStatus();
  }

  logout() {
    this.userService.logout().subscribe({
      error: (error) => {
        this.authService.removeUserToken();
        console.error(error);
        this.router.navigate(['catalog']);
      },
      complete: () => {
        this.authService.removeUserToken();
        this.router.navigate(['catalog']);
      },
    })
  }
}
