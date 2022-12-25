function create(words) {
   
   for (let word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');


      p.textContent = word;
      p.style.display = 'none';

      div.addEventListener('click', unhideP);
      div.appendChild(p);
      document.querySelector('#content').appendChild(div);
   }

   function unhideP(event) {
      event.target.children[0].style.display = '';
   }
}