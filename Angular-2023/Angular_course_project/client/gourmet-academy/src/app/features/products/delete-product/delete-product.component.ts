import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { IProduct } from 'src/app/models/product.interfaces';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnDestroy {

  @Input() productDetails!: IProduct;

  successMessage!: string;
  errorMsgFromServer!: string;
  isLoading: boolean = false;
  subscription!: Subscription;

  constructor(private dataService: DataService) { }

  deleteProduct(productId: string) {
    this.isLoading = true;
    this.subscription = this.dataService
      .deleteProduct(productId)
      .subscribe({
        next: (data) => {
          this.isLoading = false;
          this.successMessage = `Успешно изтрихте ${data.name}`;
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMsgFromServer = error.error.message.join('\n');
        }
      })
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
