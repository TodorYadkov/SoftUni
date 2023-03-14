import { createCar } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onCreate} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>
            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">
            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">
            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">
            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">
            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">
            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">
            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>
`;

export async function showCreate(context) {
    ctx = context;
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();
        const form = event.target;
        const inputData = Object.fromEntries(new FormData(form));
        for (const input in inputData) {
            if (inputData[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            if (input === 'year' && Number(inputData[input]) < 0) {
                alertFnMessage('The year must be a positive number!');
                return;
            }
            if (input === 'price' && Number(inputData[input]) < 0) {
                alertFnMessage('The price must be a positive number!');
                return;
            }
            inputData[input] = inputData[input].trim();
        }

        let { brand, model, description, year, imageUrl, price } = inputData;
        year = Number(year);
        price = Number(price);
        await createCar({ brand, model, description, year, imageUrl, price });
        ctx.page.redirect('/catalog');
    }
}