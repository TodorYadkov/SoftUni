import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { IProduct } from 'src/app/models/product.interfaces';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit, OnDestroy {
  @Input() restaurantId!: string;

  isLoading: boolean = false;
  errorMsgFromServer!: string;
  subscription!: Subscription;
  allProducts!: IProduct[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  // Get all products for the current restaurant
  getAllProducts() {
    this.isLoading = true;
    this.subscription = this.dataService
      .getAllProductsRestaurant(this.restaurantId).
      subscribe({
        next: (productsData) => {
          this.isLoading = false;
          this.allProducts = productsData;
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMsgFromServer = error.error.message.join('\n');
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}