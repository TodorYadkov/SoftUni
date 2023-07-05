import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, concatMap, forkJoin, map, merge, mergeMap, tap, toArray } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { ManagerSessionService } from 'src/app/core/services/users/manager-session.service';
import { IOrderWithProducts } from 'src/app/models/order.interfaces';
import { IRestaurant } from 'src/app/models/restaurant.interfaces';
import { IUser } from 'src/app/models/user.interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userDetails!: IUser;
  subscription!: Subscription;
  userRestaurants: IRestaurant[] = [];
  errorMsgFromServer!: string;
  isLoading: boolean = false;
  statistics: { restaurantId: string, restaurantName: string, totalProfit: number, totalCountSell: number, bestSellers: string }[] = [];

  constructor(
    private managerSession: ManagerSessionService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const hasUser = this.managerSession.getSessionToken();
    if (hasUser) {
      this.isLoading = true;
      this.userDetails = hasUser.userDetails;
      this.subscription = this.dataService.getUserRestaurants(this.userDetails._id)
        .pipe(
          mergeMap(allRestaurants => allRestaurants),
          mergeMap(restaurant => {
            this.userRestaurants.push(restaurant);
            return this.dataService.getRestaurantOrders(restaurant._id)
              .pipe(
                mergeMap(order => {
                  const totalBills = order.map((order) => order.orders.reduce((acc, curPrice) => acc + curPrice.price, 0));
                  this.statistics.push({
                    restaurantId: restaurant._id,
                    restaurantName: restaurant.name,
                    totalProfit: totalBills.reduce((acc, bill) => acc + bill, 0),
                    totalCountSell: order.length,
                    bestSellers: this.findTopSellingProducts(order),
                  });

                  return this.statistics;
                })
              );
          }),
        )
        .subscribe({
          next: (data) => {
            // Show the restaurant with the most sales first
            this.statistics.sort((a, b) => b.totalProfit - a.totalProfit);
            this.isLoading = false;
          },
          error: (error) => {
            this.errorMsgFromServer = error.error.message.join('\n');
            this.isLoading = false;
          }
        });
    }
  }

  // Get top selling products
  private findTopSellingProducts(allOrders: IOrderWithProducts[]) {
    // Change if want to show more or less products
    const bestSellersCount = 5;

    // Count occurrences of each product
    const productCount: { [key: string]: number } = {};
    allOrders.forEach((currentOrder) => {
      currentOrder.orders.forEach((order) => {
        if (productCount[order.name]) {
          productCount[order.name]++;
        } else {
          productCount[order.name] = 1;
        }
      });
    });

    // Convert object to array
    const countedProducts = Object.entries(productCount);
    // Sort array based on count in descending order
    countedProducts.sort((a, b) => b[1] - a[1]);
    // Extract the first best sellers
    const bestSellers = countedProducts.slice(0, bestSellersCount).map((entry) => entry[0]);
    // Return each product to a new line with a hyphen before the product
    return bestSellers.map((product) => `- ${product}`).join('\n');
  }

  ngOnDestroy(): void {
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }

}