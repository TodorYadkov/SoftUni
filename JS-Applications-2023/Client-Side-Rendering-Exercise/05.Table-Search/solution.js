import { html, render } from '../../node_modules/lit-html/lit-html.js';

function getData() {
   return fetch('http://localhost:3030/jsonstore/advanced/table')
      .then(response => {
         if (response.status == 200) {
            return response.json();
         }
      })
      .then(data => data)
      .catch(err => alert(err));
}

const dataArr = Object.values(await getData());
const tableBody = document.querySelector('tbody');
const tableTemplate = dataArr.map(d => html`
<tr>
   <td>${d.firstName} ${d.lastName}</td>
   <td>${d.email}</td>
   <td>${d.course}</td>
</tr>
`);

render(tableTemplate, tableBody)
document.querySelector('#searchBtn').addEventListener('click', onClick)

function onClick() {
   const userInput = document.querySelector('#searchField').value.trim().toLocaleLowerCase();

   const allRow = [...tableBody.children];
   allRow.map(row => row.classList.remove('select'))
   const selectedRows = [];
   allRow.forEach(row => {
      Array.from(row.children).forEach(col => {
         if (col.textContent.toLocaleLowerCase().includes(userInput)) {
            selectedRows.push(row);
         }
      })
   });

   selectedRows.map(row => row.classList.add('select'));
   document.querySelector('#searchField').value = '';
}