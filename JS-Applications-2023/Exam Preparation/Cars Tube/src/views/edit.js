import { getCarById, updateCar } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (car, onEdit) => ctx.html`
<section id="edit-listing">
    <div class="container">
        <form @submit=${onEdit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>
            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value="${car.brand}">
            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value="${car.model}">
            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value="${car.description}">
            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value="${car.year}">
            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value="${car.imageUrl}">
            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value="${car.price}">
            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`;

export async function showEdit(context) {
    ctx = context;
    const carId = ctx.params.id;
    const carToEdit = await getCarById(carId);
    ctx.render(editTemplate(carToEdit, onEdit));

    async function onEdit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = Object.fromEntries(new FormData(form));;
        for (const input in formData) {
            if (formData[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            if (input === 'year' && Number(formData[input]) < 0) {
                alertFnMessage('The year must be a positive number!');
                return;
            }
            if (input === 'price' && Number(formData[input]) < 0) {
                alertFnMessage('The price must be a positive number!');
                return;
            }

            formData[input] = formData[input].trim();
        }

        let { brand, model, description, year, imageUrl, price } = formData;
        year = Number(year);
        price = Number(price);
        await updateCar(carId, { brand, model, description, year, imageUrl, price });
        form.reset();
        ctx.page.redirect(`/catalog/${carId}`);
    }
}