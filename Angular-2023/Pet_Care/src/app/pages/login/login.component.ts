import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/shared/services/authentication/auth.service';
import { UserManagementService } from 'src/app/shared/services/userManage/user-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model!: IUserModel;
  hasError: string = '';

  constructor(
    private userManage: UserManagementService,
    private authService: AuthService,
    private router: Router
  ) { }

  loginMethod(formData: NgForm) {
    this.model = new IUserModel(formData.value.email, formData.value.password);
    this.authService
      .login(this.model)
      .subscribe({
        next: (serverData) => this.userManage.setUserSession(serverData),
        error: (err) => this.hasError = err.error.message,
        complete: () => {
          formData.reset();
          this.router.navigate(['home']);
        }
      });
  }
} 
