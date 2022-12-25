function solve() {
  const table = document.querySelector('.wrapper .table tbody');
  const buttons = document.querySelectorAll('#exercise button');
  buttons[0].addEventListener('click', generateFn);
  buttons[1].addEventListener('click', buyFn);

  function buyFn() {
    const output = document.querySelectorAll('textarea')[1];
    const boughtFurniture = [];
    const totalPrice = [];
    const avgDecFactor = [];
    const markedCheckbox = Array.from(document.querySelectorAll('.wrapper .table input'))
      .filter(el => el.checked);

    for (let furniture of markedCheckbox) {
      const rowEl = Array.from(furniture.parentElement.parentElement.children);
      boughtFurniture.push(rowEl[1].textContent);
      totalPrice.push(Number(rowEl[2].textContent));
      avgDecFactor.push(Number(rowEl[3].textContent));
    }

    output.textContent += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    output.textContent += `Total price: ${totalPrice.reduce((acc, cur) => acc + cur, 0).toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${avgDecFactor.reduce((acc, cur) => acc + cur, 0) / avgDecFactor.length}`;
  }

  function generateFn() {
    const input = JSON.parse(document.querySelector('textarea').value);
    for (let el of input) {
      const orderedElements = new Map();
      orderedElements
        .set('img', el.img)
        .set('name', el.name)
        .set('price', Number(el.price))
        .set('decFactor', Number(el.decFactor))
        .set('inputCheck', '');

      const tr = document.createElement('tr');
      for (let [key, value] of orderedElements) {
        const td = document.createElement('td');
        const p = document.createElement('p');
        const img = document.createElement('img');
        const inputCheckbox = document.createElement('input');

        if (key === 'img') {
          img.src = value;
          td.appendChild(img);
        } else if (key === 'inputCheck') {
          inputCheckbox.type = 'checkbox';
          td.appendChild(inputCheckbox);
        } else {
          p.textContent = value;
          td.appendChild(p);
        }

        tr.appendChild(td);
      }

      table.appendChild(tr);
    }
  }
}