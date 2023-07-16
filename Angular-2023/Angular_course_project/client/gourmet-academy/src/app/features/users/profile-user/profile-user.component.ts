import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { IOrderWithProducts } from 'src/app/models/order.interfaces';
import { IUser } from 'src/app/models/user.interfaces';

// Summary for each order
type OrderSummary = {
  restaurantImage: string;
  restaurantName: string;
  restaurantLocation: string;
  restaurantAddress: string;
  restaurantPhone: string;
  totalBillCost: number;
  addressDelivery: string;
  date: number;
  products: {
    _id: string;
    image: string;
    name: string;
    weight: string;
    quantity: number;
    price: number;
    totalCost: number;
  }[];
};

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit, OnDestroy {

  @Input() userDetails!: IUser;

  allSummaryOrders!: OrderSummary[]; // Using to show summary information for each order
  isRoleAdmin!: boolean; // Use to show admin profile page or user
  subscription!: Subscription;
  errorMsgFromServer!: string;
  isLoading: boolean = false;
  userOrders!: IOrderWithProducts[];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.subscription = this.dataService.getUserBought(this.userDetails._id)
      .pipe(
        map(allOrders => {
          const resultSummaryOrder = allOrders.map(currentOrder => {
            // Create new temporary object to get summary for each product
            const currentProductDetails: { [key: string]: { _id: string, image: string, name: string, weight: string, quantity: number, price: number, totalCost: number } } = {};

            // For each product, create a new property with key _id and count the product
            currentOrder.orders.forEach(orderObj => {
              // Check if the product exist and if not add it with the necessary properties
              if (currentProductDetails.hasOwnProperty(orderObj._id) === false) {
                currentProductDetails[orderObj._id] = {
                  _id: orderObj._id,
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

            // Get details of the current restaurant where the order is from
            const currentOrderDetails = {
              restaurantImage: currentOrder.restaurantId.image,
              restaurantName: currentOrder.restaurantId.name,
              restaurantLocation: currentOrder.restaurantId.location,
              restaurantAddress: currentOrder.restaurantId.address,
              restaurantPhone: currentOrder.restaurantId.phone,
              totalBillCost: currentOrder.orders.reduce((acc, currProduct) => { return acc + currProduct.price }, 0), // Get total cost for entire order
              addressDelivery: currentOrder.addressDelivery,
              date: currentOrder.date,
              products: Object.values(currentProductDetails) // Summary data for each product
            };

            // Return current order
            return currentOrderDetails;
          });
          // Get summary details for all products in descending order
          this.allSummaryOrders = resultSummaryOrder.sort((a,b) => b.date - a.date);

          return allOrders;
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}



/*
[
  {
    restaurantImage: string,
    restaurantName: string,
    restaurantAddress: string,
    restaurantPhone: string,
    totalBillCost: string
    date: number,
    [
      image: string,
      name: string,
      weight: string,
      quantity: number,
      price: number,
      totalCost: number
    ]
  }
]
 */





// [
//   {
//     "_id": "64b269f2f3db2aeb5ed6e5c5",
//     "restaurantId": {
//       "_id": "64af9fe6d5316acf2745d9a3",
//       "name": "Момини Двори",
//       "location": "Банско",
//       "address": "гр. Банско, обл. Благоевград, площад Никола Вапцаров 2",
//       "phone": "+359885406595",
//       "cuisine": "Българска традиционна",
//       "description": "Прекрасно място в сърцето на град Банско",
//       "image": "https://cdn.bitrix24.com/b417553/landing/d84/d84241268c1920a951f37c89fb698d16/slider_main_photo_2_1x.jpg",
//       "owner": "64930dcdaa6ba6a8179769ea",
//       "__v": 0
//     },
//     "userId": "64b109c16389a65552d30b4b",
//     "addressDelivery": "Русе, ул. „Щип“ 7002 Ялта",
//     "orders": [
//       {
//         "_id": "64afa60470e9bd272ef4a472",
//         "name": "Шопска салата",
//         "weight": "380 гр.",
//         "price": 10.9,
//         "group": "Салати",
//         "image": "https://m.1001recepti.com/images/photos/recipes/size_5/klasicheska-shopska-salata-s-domati-krastavici-chushki-luk-i-sirene-a44e003a9f69e08c30bdee30f83f570e-[103344].jpg",
//         "restaurantId": "64af9fe6d5316acf2745d9a3",
//         "__v": 0
//       },
//       {
//         "_id": "64afa60470e9bd272ef4a472",
//         "name": "Шопска салата",
//         "weight": "380 гр.",
//         "price": 10.9,
//         "group": "Салати",
//         "image": "https://m.1001recepti.com/images/photos/recipes/size_5/klasicheska-shopska-salata-s-domati-krastavici-chushki-luk-i-sirene-a44e003a9f69e08c30bdee30f83f570e-[103344].jpg",
//         "restaurantId": "64af9fe6d5316acf2745d9a3",
//         "__v": 0
//       },
//       {
//         "_id": "64afa60470e9bd272ef4a472",
//         "name": "Шопска салата",
//         "weight": "380 гр.",
//         "price": 10.9,
//         "group": "Салати",
//         "image": "https://m.1001recepti.com/images/photos/recipes/size_5/klasicheska-shopska-salata-s-domati-krastavici-chushki-luk-i-sirene-a44e003a9f69e08c30bdee30f83f570e-[103344].jpg",
//         "restaurantId": "64af9fe6d5316acf2745d9a3",
//         "__v": 0
//       },
//     ],
//     "date": 1689414121749,
//     "__v": 0
//   },
// ]


















































// export class ProfileUserComponent implements OnInit, OnDestroy {

//   @Input() userDetails!: IUser;

//   isRoleAdmin!: boolean; // Use to show admin profile page or user
//   subscription!: Subscription;
//   errorMsgFromServer!: string;
//   isLoading: boolean = false;
//   userOrders!: IOrderWithProducts[];
//   // Using to show summary information for each order
//   allSummaryOrders: { image: string, name: string, weight: string, quantity: number, price: number, totalCost: number }[] = [];

//   constructor(
//     private dataService: DataService,
//   ) { }

//   ngOnInit(): void {

//     this.isLoading = true;
//     this.subscription = this.dataService.getUserBought(this.userDetails._id)
//       .pipe(
//         map(allOrdersArray => {
//           const summaryOrders = allOrdersArray.map(order => {
//             // Create new temporary object to get summary for each product
//             const currentProductDetails: { [key: string]: { image: string, name: string, weight: string, quantity: number, price: number, totalCost: number } } = {};

//             // For each product, create a new property with key _id and count the product
//             order.orders.forEach(orderObj => {
//               // Check if the product exist and if not add it with the necessary properties
//               if (currentProductDetails.hasOwnProperty(orderObj._id) === false) {
//                 currentProductDetails[orderObj._id] = {
//                   image: orderObj.image,
//                   name: orderObj.name,
//                   weight: orderObj.weight,
//                   quantity: 0,
//                   price: orderObj.price,
//                   totalCost: 0
//                 };
//               }
//               // If the product exists - count it, and add current price
//               currentProductDetails[orderObj._id].quantity += 1;
//               currentProductDetails[orderObj._id].totalCost += orderObj.price;

//             });
//             // Return array with object with summary for each order
//             return Object.values(currentProductDetails);
//           })
//           // Get all details for each order with flat because has nested arrays
//           this.allSummaryOrders = summaryOrders.flat();
//           return allOrdersArray;
//         })
//       )
//       .subscribe({
//         next: (ordersData) => {
//           this.isLoading = false;
//           this.userOrders = ordersData;
//           console.log(this.userOrders)
//           console.log(this.allSummaryOrders)
//         },
//         error: (error) => {
//           this.isLoading = false;
//           this.errorMsgFromServer = error.error.message;
//         }
//       })
//   }

//   ngOnDestroy(): void {
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }
// }
