import { createProduct } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
<section id="create">
    <div class="form">
        <h2>Add Product</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="name" id="name" placeholder="Product Name" />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
            <input type="text" name="category" id="product-category" placeholder="Category" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
                cols="50"></textarea>

            <input type="text" name="price" id="product-price" placeholder="Price" />

            <button type="submit">Add</button>
        </form>
    </div>
</section>`;

export async function showCreate(context) {
    ctx = context;
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const inputData = {
            name: formData.get('name'),
            imageUrl: formData.get('imageUrl'),
            category: formData.get('category'),
            description: formData.get('description'),
            price: formData.get('price'),
        };

        for (let input in inputData) {
            if (inputData[input] === '') {
                alertFnMessage('All fields are require!');
                return;
            }
            if (input == 'price' && inputData[input] < 0) {
                alertFnMessage('Price must be a positive number');
                return;
            }
            if (typeof inputData[input] == 'string') {
                inputData[input] = inputData[input].trim();
            }
        }

        await createProduct(inputData);
        form.reset();
        ctx.page.redirect('/catalog');
    }
}