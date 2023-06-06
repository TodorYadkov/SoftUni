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
  observe$!: Subscription;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) { }

  updateNav() {
    return this.authService.userStatus;
  }

  logout() {
    this.observe$ = this.userService.logout().subscribe({
      error: (error) => {
        console.error(error.message),
          this.authService.clearUserToken();
        this.router.navigate(['/']);
      },
      complete: () => {
        this.authService.clearUserToken();
        this.router.navigate(['/']);
        this.observe$.unsubscribe();
      }
    })

  }
}
