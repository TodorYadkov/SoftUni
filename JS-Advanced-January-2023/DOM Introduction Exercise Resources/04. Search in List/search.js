function search() {
   const elements = document.querySelectorAll('ul#towns li');
   const searchText = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let matches = 0;

   for (let element of elements) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = '';
   }

   for (let element of elements) {

      if (element.textContent.includes(searchText)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         matches++;
      }
   }
   
   result.textContent = `${matches} matches found`;
}
