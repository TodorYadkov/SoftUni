import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { translateErrorsFromServer } from 'src/app/core/environments/constants';

import { ManagerSessionService } from 'src/app/core/services/users/manager-session.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { IUser, IUserToken } from 'src/app/models/user.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  userToken!: IUserToken;
  subscription!: Subscription;
  errorMsgFromServer!: string;
  isLoading: boolean = false;

  constructor(
    private userService: UsersService,
    private managerSession: ManagerSessionService,
    private router: Router,
  ) { }

  // Register method
  registerUser(formData: NgForm) {
    const userInput: IUser = formData.value;
    // Validate user input
    if (Object.values(formData.value).some(v => v === '')) {
      this.errorMsgFromServer = 'Всички полета са задължителни';

    } else if (userInput.name.length < 2 || userInput.name.length > 30) {
      this.errorMsgFromServer = 'Името трябва да бъде между 2 и 30 символа';

    } else if (/^[\w]+@[\w]+\.[\w]+$/.test(userInput.email) === false) {
      this.errorMsgFromServer = 'Въведеният имейл е невалиден';

    } else if (/^\+\d{3}\d{3}\d{3}\d{3}$/.test(userInput.phone) === false) {
      this.errorMsgFromServer = 'Моля ползвайте следният формат +359111222333'

    } else if (userInput.address.length < 5 || userInput.address.length > 100) {
      this.errorMsgFromServer = 'Адресът трябва да бъде между 5 и 100 символа';

    } else if (userInput.password.length < 6) {
      this.errorMsgFromServer = 'Паролата трябва да бъде поне 6 символа';

    } else if (userInput.password != formData.value.repass) {
      this.errorMsgFromServer = 'Паролите не съвпадат'

    } else {
      this.isLoading = true;
      this.subscription = this.userService.register(userInput) // When we make a get or post request, we don't need to unsubscribe
        .subscribe({
          next: (data) => {
            this.userToken = data;
            formData.reset();
            this.managerSession.addSession(this.userToken);
            this.isLoading = false;
            this.router.navigate(['/']);
          },
          error: (error) => {
            const errors = translateErrorsFromServer; // Translate the error
            this.errorMsgFromServer = errors.has(error.error.message.join('\n'))
              ? errors.get(error.error.message.join('\n'))
              : error.error.message.join('\n'); // Translate the error and if it is different from the current one, show it in English
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