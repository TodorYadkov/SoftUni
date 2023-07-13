import { Component, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { IProduct } from 'src/app/models/product.interfaces';
import { IRestaurant } from 'src/app/models/restaurant.interfaces';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnDestroy {

  @Input() restaurantDetails!: IRestaurant;
  @Input() allOrderedProducts!: { [key: string]: IProduct[] };
  @Input() summaryOrder!: { product: IProduct, qtyProduct: number, totalPriceProduct: number }[];
  @Input() totalBillCost!: number;

  successMessage!: string;
  errorMsgFromServer!: string;
  isLoading: boolean = false;
  subscription!: Subscription;

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  // Pay current bill
  payBill(formData: NgForm): void {
    const addressDelivery = formData.value.addressDelivery.trim();
    if (addressDelivery.length < 5 || addressDelivery.length > 100) {
      this.errorMsgFromServer = 'Адресът трбва да бъде с дължина между 5 и 100 символа';
      return;
    }
    // Get all purchased product - First create from object array with [productID, orders[{IProduct}]] 
    // Next get length of each orders and make new array with empty slots
    // Fill the empty slots with productID - make this for each ordered product
    // Result before flatMap is [ [ productId ], [ productId, productId ], etc ]
    // The last use flat map to make from nested arrays one array with productID - needed to backend
    // Final result is [ productId, productId, productId ]
    const orders = Object.entries(this.allOrderedProducts).flatMap(([productId, orders]) => Array(orders.length).fill(productId));

    // Create object needed to backend
    const purchaseData = {
      addressDelivery,
      orders
    };

    this.isLoading = true;
    this.subscription = this.dataService
      .buyFromRestaurant(this.restaurantDetails._id, purchaseData)
      .subscribe({
        next: (data) => {
          this.isLoading = false;
          this.successMessage = 'Успешна поръчка. Наш консултант ще се свърже с вас. Приятен ден!'
        },
        error: (error) => this.errorMsgFromServer = error.error.message
      })
  }

  // On close redirect to home page
  onCloseModal(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}