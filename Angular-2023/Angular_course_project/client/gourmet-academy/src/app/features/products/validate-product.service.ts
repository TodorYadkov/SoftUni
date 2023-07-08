import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/product.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ValidateProductService {

  constructor() { }

  validate(productData: IProduct): { hasError: boolean, error: string } {
    const result: { hasError: boolean, error: string } = {
      hasError: false,
      error: '',
    };

    if (Object.values(productData).some(v => v === '')) {
      result.error = 'Всички полета са задължителни';

    } else if (productData.name.length < 3 || productData.name.length > 100) {
      result.error = 'Името на продукта трябва да бъде между 3 и 100 символа';

    } else if (productData.weight.length < 2 || productData.weight.length > 10) {
      result.error = 'Мярката трябва да бъде между 2 и 10 символа';

    } else if (isNaN(Number(productData.price)) || Number(productData.price) < 0) {
      result.error = 'Моля въведете коректна цена'

    } else if (productData.group.length < 3 || productData.group.length > 20) {
      result.error = 'Групата трябва да бъде между 3 и 20 символа';

    } else if (/^https?:\/\/[^ ]+$/.test(productData.image) === false) {
      result.error = 'Снимката трябва да бъде линк започващ с http:// или https://'
    }
    console.log(productData)
    if (result.error) {
      result.hasError = true;
    }

    return result;
  }

  // Check if the current html path is correct
  validateImagePath(imagePath: string): string {

    return /^https?:\/\/[^ ]+$/.test(imagePath) ? imagePath : '';
  }
}
