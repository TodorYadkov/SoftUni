import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IProduct } from 'src/app/models/product.interfaces';
import { ValidateProductService } from '../validate-product.service';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnDestroy {

  @Input() productDetails!: IProduct;
  @Output() updatedProduct = new EventEmitter<IProduct>;

  successMessage!: string;
  errorMsgFromServer!: string;
  isLoading: boolean = false;
  subscription!: Subscription;
  imageUrl!: string;

  constructor(
    private validateProduct: ValidateProductService,
    private dataService: DataService,
  ) { }

  editProduct(formData: NgForm) {
    const productData: IProduct = formData.value;
    // Validate user input
    const validatedProduct = this.validateProduct.validate(productData);
    if (validatedProduct.hasError) {
      this.errorMsgFromServer = validatedProduct.error;

    } else {
      this.isLoading = true;
      this.subscription = this.dataService
        .updateProduct(this.productDetails._id, productData)
        .subscribe({
          next: (data) => {
            this.isLoading = false;
            this.productDetails = data;
            this.successMessage = `Успешно редактирахте ${data.name}`;
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
  // Wait for the user to make more changes to their product - this fixes the issue with a modal to stay in the background
  onCloseModal() {
    this.updatedProduct.emit();
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}