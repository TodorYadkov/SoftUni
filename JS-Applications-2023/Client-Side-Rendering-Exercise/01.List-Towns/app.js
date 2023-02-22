import { html, render } from '../../node_modules/lit-html/lit-html.js';

const mainDiv = document.getElementById('root');
document.getElementById('btnLoadTowns').addEventListener('click', (e) => {
    e.preventDefault();
    const towns = document.getElementById('towns').value.split(', ');
    const townsTemplate = html`
    <ul>
        ${towns.map(t => html`<li>${t}</li>`)};
    </ul>;
    `;

    render(townsTemplate, mainDiv);
});