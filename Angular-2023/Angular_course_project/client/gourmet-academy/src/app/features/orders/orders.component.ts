import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map, mergeMap } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { IProduct } from 'src/app/models/product.interfaces';
import { IRestaurant } from 'src/app/models/restaurant.interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;
  errorMsgFromServer!: string;
  subscription!: Subscription;
  restaurantId!: string;
  restaurantDetails!: IRestaurant;
  allProducts$!: Observable<IProduct[]>; // Get all products and using with async pipe
  currentProducts!: IProduct[]; // This variable will be used to display products on the screen


  constructor(
    private title: Title,
    private dataService: DataService,
    private activeRoutes: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Поръчка');

    this.restaurantId = '64a5d60d55954c27a48e12f6'; // this.activeRoutes.snapshot.params['restaurantId']; NOT FORGET TO UNCOMMENT THIS
    // Get details for restaurant
    this.isLoading = true;
    this.subscription = this.dataService
      .getRestaurantById(this.restaurantId)
      .subscribe({
        next: (restaurantData) => {
          this.restaurantDetails = restaurantData;
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMsgFromServer = error.error.message.join('\n');
          this.isLoading = false;
        }
      });
    // Get all products like a observable
    this.allProducts$ = this.dataService.getAllProductsRestaurant(this.restaurantId);


  }








  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}