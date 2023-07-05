import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { IRestaurant } from 'src/app/models/restaurant.interfaces';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit, OnDestroy {
  retaurant!: IRestaurant;
  subscription!: Subscription;
  errorMsgFromServer!: string;
  isLoading: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private title: Title,
  ) { }

  ngOnInit(): void {
        this.title.setTitle('Ресторант');
  }

  createRestaurant(formData: NgForm) {
    const userInput: IRestaurant = formData.value;

    // Validate user input
    if (Object.values(formData.value).some(v => v === '')) {
      this.errorMsgFromServer = 'Всички полета са задължителни';

    } else if (userInput.name.length < 2 || userInput.name.length > 50) {
      this.errorMsgFromServer = 'Името трябва да бъде между 2 и 50 символа';

    } else if (userInput.location.length < 2 || userInput.location.length > 50) {
      this.errorMsgFromServer = 'Градът трябва да бъде между 2 и 50 символа';

    } else if (userInput.address.length < 5 || userInput.address.length > 100) {
      this.errorMsgFromServer = 'Адресът трябва да бъде между 5 и 100 символа';

    } else if (/^\+\d{3}\d{3}\d{3}\d{3}$/.test(userInput.phone) === false) {
      this.errorMsgFromServer = 'Моля ползвайте следният формат +359111222333'

    } else if (userInput.cuisine.length < 5 || userInput.cuisine.length > 40) {
      this.errorMsgFromServer = 'Предлагана кухня трябва да бъде между 5 и 40 символа';

    } else if (userInput.description.length < 5 || userInput.description.length > 200) {
      this.errorMsgFromServer = 'Описанието трябва да бъде между 5 и 200 символа';

    } else if (/^https?:\/\/[^ ]+$/.test(userInput.image) === false) {
      this.errorMsgFromServer = ' Снимката трябва да бъде линк започващ с http:// или https://';

    } else {
      
      this.isLoading = true;
      this.subscription = this.dataService.createRestaurant(userInput)
        .subscribe({
          next: (data) => {
            formData.reset();
            this.isLoading = false;
            this.router.navigate(['details', data._id]);
          },
          error: (error) => {
            this.errorMsgFromServer = error.error.message.join('\n');
            this.isLoading = false;
          },
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

}