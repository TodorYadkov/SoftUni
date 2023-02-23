import { towns } from './towns.js';
import { html, render } from '../../node_modules/lit-html/lit-html.js';

const townsEl = html`
<ul>
   ${towns.map(t => html`<li>${t}</li>`)}
</ul>
`;

render(townsEl, document.getElementById('towns'));
document.querySelector('button').addEventListener('click', search);

function search() {
   const searchText = document.getElementById('searchText').value;
   const allTowns = Array.from(document.querySelector('ul').children);
   allTowns.map(t => t.classList.remove('active'));
   const found = allTowns.filter(t => t.textContent.includes(searchText));
   found.map(t => t.classList.add('active'));
   document.getElementById('result').textContent = `${found.length} matches found`;
}
