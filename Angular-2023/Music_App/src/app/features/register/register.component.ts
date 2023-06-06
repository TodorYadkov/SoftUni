import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  errorMsgFromServer!: string;
  observer$!: Subscription;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Register Page')
  }

  onSubmit(formData: NgForm) {
    const { email, password } = formData.value;
    this.observer$ = this.userService.register({ email, password }).subscribe({
      next: (data) => this.authService.setUserToken(data),
      error: (error) => this.errorMsgFromServer = error.error.message,
      complete: () => {
        this.observer$.unsubscribe();
        this.router.navigate(['/'])
      }
    })
  }


}