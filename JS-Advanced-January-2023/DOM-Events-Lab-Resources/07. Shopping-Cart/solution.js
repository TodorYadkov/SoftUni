function solve() {
   const btnsAdd = document.querySelectorAll('.add-product');
   const btnCheckout = document.querySelector('.shopping-cart .checkout');
   const textArea = document.querySelector('.shopping-cart textarea');
   const productList = {};

   for (let btn of btnsAdd) {
      btn.addEventListener('click', addProduct);
   }
   btnCheckout.addEventListener('click', checkout)

   function addProduct(event) {
      const parentEl = event.target.parentElement.parentElement;
      const nameProduct = parentEl.getElementsByClassName('product-title')[0].textContent;
      const priceProduct = Number(parentEl.getElementsByClassName('product-line-price')[0].textContent);

      if (productList[nameProduct] === undefined) {
         productList[nameProduct] = 0;
      }

      productList[nameProduct] += priceProduct;
      textArea.textContent += `Added ${nameProduct} for ${priceProduct.toFixed(2)} to the cart.\n`;
   }

   function checkout() {
      const products = Object.keys(productList).join(', ');
      const totalPrice = Object.values(productList)
         .reduce((previousValue, totalValue) => previousValue + totalValue, 0);

      for (let btn of btnsAdd) {
         btn.setAttribute('disabled', '');
      }
      
      btnCheckout.setAttribute('disabled', '');
      textArea.textContent += `You bought ${products} for ${totalPrice.toFixed(2)}.`;
   }
}