import { contacts } from './contacts.js';
import { html, render } from '../../node_modules/lit-html/lit-html.js';

const divContacts = document.getElementById('contacts');

const templateNewContact = (contact) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn" @click="${(e) => showDetails(e)}">Details</button>
        <div class="details" id="${contact.id}" style="display: none;">
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>
    </div>
</div>
`;

render(contacts.map(c => templateNewContact(c)), divContacts);

function showDetails(event) {
    event.target.nextElementSibling.style.display === 'none' ?
        event.target.nextElementSibling.style = 'display: block' :
        event.target.nextElementSibling.style = 'display: none';
}