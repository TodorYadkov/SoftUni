import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMsgFromServer: string = '';
  subscribe$!: Subscription;
  
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) { }

  onSubmit(formData: NgForm) {
    const userInput = new User(formData.value.email, formData.value.password);
    this.subscribe$ = this.userService.login(userInput).subscribe({
      next: (data) => this.authService.setUserToken(data),
      error: (error) => this.errorMsgFromServer = error.error.message,
      complete: () => {
        formData.reset();
        this.subscribe$.unsubscribe();
        this.router.navigate(['catalog']);
      }
    });
  }
}