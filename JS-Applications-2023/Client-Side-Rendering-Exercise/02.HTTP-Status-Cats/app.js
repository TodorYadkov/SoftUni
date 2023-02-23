import { cats } from './catSeeder.js';
import { html, render } from '../../node_modules/lit-html/lit-html.js';

(function () {
    const allCats = html`
    <ul>
        ${cats.map(c => html`
        <li>
            <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click=${(e) => showDetails(e)}>Show status code</button>
                <div class="status" style="display: none" id="${c.id}">
                    <h4>Status Code: ${c.id}</h4>
                    <p>${c.statusMessage}</p>
                </div>
            </div>
        </li>
        `)}
    </ul>
    `;

    render(allCats, document.getElementById('allCats'));

})();

function showDetails(event) {
    event.target.textContent === 'Show status code' ?
        event.target.textContent = 'Hide status code' :
        event.target.textContent = 'Show status code';

    event.target.nextElementSibling.style.display === 'none' ?
        event.target.nextElementSibling.style = 'display: block' :
        event.target.nextElementSibling.style = 'display: none';
}