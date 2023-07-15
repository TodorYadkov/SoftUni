import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { UsersService } from 'src/app/core/services/users/users.service';
import { IOrderWithProducts } from 'src/app/models/order.interfaces';
import { IUser } from 'src/app/models/user.interfaces';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit, OnDestroy {

  @Input() userDetails!: IUser;

  isRoleAdmin!: boolean; // Use to show admin profile page or user
  subscription!: Subscription;
  errorMsgFromServer!: string;
  isLoading: boolean = false;
  userOrders!: IOrderWithProducts[];
  isHiddenRow: boolean = true;
  // Using to show summary information for each order
  hiddenRowDetails: { image: string, name: string, weight: string, quantity: number, price: number, totalCost: number }[] = [];

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.subscription = this.userService.getUserBought(this.userDetails._id)
      .pipe(
        map(allOrdersArray => {
          const summaryOrders = allOrdersArray.map(order => {
            // Create new temporary object to get summary for each product
            const currentProductDetails: { [key: string]: { image: string, name: string, weight: string, quantity: number, price: number, totalCost: number } } = {};

            // For each product, create a new property with key _id and count the product
            order.orders.forEach(orderObj => {
              // Check if the product exist and if not add it with the necessary properties
              if (currentProductDetails.hasOwnProperty(orderObj._id) === false) {
                currentProductDetails[orderObj._id] = {
                  image: orderObj.image,
                  name: orderObj.name,
                  weight: orderObj.weight,
                  quantity: 0,
                  price: orderObj.price,
                  totalCost: 0
                };
              }
              // If the product exists - count it, and add current price
              currentProductDetails[orderObj._id].quantity += 1;
              currentProductDetails[orderObj._id].totalCost += orderObj.price;

            });
            // Return array with object with summary for each order
            return Object.values(currentProductDetails);
          })
          // Get all details for each order with flat because has nested arrays
          this.hiddenRowDetails = summaryOrders.flat();
          return allOrdersArray;
        })
      )
      .subscribe({
        next: (ordersData) => {
          this.isLoading = false;
          this.userOrders = ordersData;
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMsgFromServer = error.error.message;
        }
      })
  }

  // Show - hide additional information about each order on table row
  toggleRow(): boolean {
    this.isHiddenRow = !this.isHiddenRow;
    return this.isHiddenRow;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}