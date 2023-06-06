import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsgFromServer!: string;
  observe$!: Subscription;

  constructor(
    private titleService: Title,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login Page')
  }

  onSubmit(formData: NgForm) {
    const { email, password } = formData.value;
    this.observe$ = this.userService.login({ email, password }).subscribe({
      next: (data) => this.authService.setUserToken(data),
      error: (error) => this.errorMsgFromServer = error.error.message,
      complete: () => {
        this.observe$.unsubscribe();
        this.router.navigate(['/']);
      },
    })
  }

}