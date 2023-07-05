import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product!: IProduct;

  addProduct(formData: NgForm) {
    console.log(formData.value);
  }
}

// Only to create html move in Models
interface IProduct {
  name: string;
  weight: string;
  price: string;
  group: string;
  image: string;
}