function solve() {
   document.querySelector('#container button').addEventListener('click', onClick);
   const numberToConvert = document.querySelector('#container #input');
   const selectFrom = document.querySelector('#container #selectMenuFrom');
   const selectTo = document.querySelector('#container #selectMenuTo');
   const result = document.querySelector('footer #result');

   const newBinary = document.createElement('option');
   newBinary.value = 'binary';
   newBinary.textContent = 'Binary';
   const newHexadecimal = document.createElement('option');
   newHexadecimal.value = 'hexadecimal';
   newHexadecimal.textContent = 'Hexadecimal';
   selectTo.add(newBinary);
   selectTo.add(newHexadecimal);

   function onClick() {
      const selectedTypeFrom = selectFrom.value;
      const selectedTypeTo = selectTo.value;
      let converted = '';

      switch (selectedTypeTo) {
         case 'binary':
            converted = Number(numberToConvert.value).toString(2);
            break;
         case 'hexadecimal':
            converted = Number(numberToConvert.value).toString(16).toUpperCase();
            break;
      }

      result.value = converted;
   }
}


