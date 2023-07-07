import { Component, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnDestroy {
  // Get restaurant ID from parent
  @Input() restaurantId!: string;

  successMessage!: string;
  errorMsgFromServer!: string;
  isLoading: boolean = false;
  subscription!: Subscription;
  imageUrl!: string;

  constructor(private dataService: DataService) { }

  // Create new product
  addProduct(formData: NgForm): void {
    const userInput = formData.value;
    // Validate user input
    if (Object.values(formData.value).some(v => v === '')) {
      this.errorMsgFromServer = 'Всички полета са задължителни';

    } else if (userInput.name.length < 3 || userInput.name.length > 100) {
      this.errorMsgFromServer = 'Името на продукта трябва да бъде между 3 и 100 символа';

    } else if (userInput.weight.length < 2 || userInput.weight.length > 10) {
      this.errorMsgFromServer = 'Мярката трябва да бъде между 2 и 10 символа';

    } else if (isNaN(Number(userInput.price)) || Number(userInput.price) < 0) {
      this.errorMsgFromServer = 'Моля въведете коректна цена'

    } else if (userInput.group.length < 3 || userInput.group.length > 20) {
      this.errorMsgFromServer = 'Групата трябва да бъде между 3 и 20 символа';

    } else if (/^https?:\/\/[^ ]+$/.test(userInput.image) === false) {
      this.errorMsgFromServer = 'Снимката трябва да бъде линк започващ с http:// или https://'

    }
    else {
      this.isLoading = true;
      this.subscription = this.dataService.createNewProduct(this.restaurantId, userInput)
        .subscribe({
          next: (data) => {
            this.isLoading = false;
            formData.reset();
            this.successMessage = `Успешно добавихте ${userInput.name}
                                   Може да продължите да добавите следващ продукт`;
          },
          error: (error) => {
            this.isLoading = false;
            this.errorMsgFromServer = error.error.message.join('\n');
          }
        });
    }
  }

  // Check if the current html path is correct
  validateImagePath(imagePath: string): void {
    if (/^https?:\/\/[^ ]+$/.test(imagePath)) {
      this.imageUrl = imagePath;
    } else {
      this.imageUrl = '';
    }
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}