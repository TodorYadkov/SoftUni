import { Component, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { ValidateProductService } from '../validate-product.service';
import { IProduct } from 'src/app/models/product.interfaces';

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

  constructor(
    private validateProduct: ValidateProductService,
    private dataService: DataService
  ) { }

  // Create new product
  addProduct(formData: NgForm): void {
    const productData: IProduct = formData.value;
    // Validate user input
    const validatedProduct = this.validateProduct.validate(productData);
    if (validatedProduct.hasError) {
      this.errorMsgFromServer = validatedProduct.error;

    } else {
      this.isLoading = true;
      this.subscription = this.dataService.createNewProduct(this.restaurantId, productData)
        .subscribe({
          next: (data) => {
            this.isLoading = false;
            formData.reset();
            this.successMessage = `Успешно добавихте ${productData.name}`;
          },
          error: (error) => {
            this.isLoading = false;
            this.errorMsgFromServer = error.error.message.join('\n');
          }
        });
    }
  }

  // Check if the current html path is correct
   validateImagePath(imagePath: string) {
    this.imageUrl = this.validateProduct.validateImagePath(imagePath);
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}