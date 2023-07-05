import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product!: IProduct;

  editProduct(formData: NgForm) {
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