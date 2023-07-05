import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { translateErrorsFromServer } from 'src/app/core/environments/constants';
import { ManagerSessionService } from 'src/app/core/services/users/manager-session.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { IUser } from 'src/app/models/user.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  errorMsgFromServer!: string;
  subscription!: Subscription;
  isLoading: boolean = false;

  constructor(
    private userService: UsersService,
    private managerSession: ManagerSessionService,
    private router: Router
  ) { }

  loginUser(formData: NgForm) {
    const userInput: IUser = formData.value;
    // Validate user input
    if (Object.values(formData.value).some(v => v === '')) {
      this.errorMsgFromServer = 'Всички полета са задължителни';

    } else if (/^[\w]+@[\w]+\.[\w]+$/.test(userInput.email) === false) {
      this.errorMsgFromServer = 'Въведеният имейл е невалиден';

    } else if (userInput.password.length < 6) {
      this.errorMsgFromServer = 'Паролата трябва да бъде поне 6 символа';

    } else {

      this.isLoading = true;
      this.subscription = this.userService.login(userInput)
        .subscribe({
          next: (data) => {
            const userToken = data;
            this.managerSession.addSession(userToken);
            this.isLoading = false;
            formData.reset();
            this.router.navigate(['/']);
          },
          error: (error) => {
            const errors = translateErrorsFromServer; // Translate error
            this.errorMsgFromServer = errors.has(error.error.message.join('\n'))
              ? errors.get(error.error.message.join('\n'))
              : error.error.message.join('\n');
            this.isLoading = false;
          }
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}