import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent {
  retaurant!: IRestaurant;

  editRestaurant(formData: NgForm) {
    console.log(formData.value);
  }
}

// Only to create html move in Models
interface IRestaurant {
  name: string;
  location: string;
  phone: string;
  address: string;
  cuisine: string;
  description: string;
  image: string;
}