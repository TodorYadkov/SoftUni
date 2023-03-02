import { getProductById, updateProduct } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (product, updateFn) => ctx.html`
<section id="edit">
    <div class="form">
        <h2>Edit Product</h2>
        <form @submit=${updateFn} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Product Name" .value=${product.name} />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image"
                .value=${product.imageUrl} />
            <input type="text" name="category" id="product-category" placeholder="Category"
                .value=${product.category} />
            <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"
                .value=${product.description}></textarea>
            <input type="text" name="price" id="product-price" placeholder="Price" .value=${product.price} />
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function showEdit(context) {
    ctx = context;
    const productId = ctx.params.productId;
    const productToEdit = await getProductById(productId);
    ctx.render(editTemplate(productToEdit, updateFn));

    async function updateFn(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            imageUrl: formData.get('imageUrl'),
            category: formData.get('category'),
            description: formData.get('description'),
            price: formData.get('price'),
        };
        for
         (let input in data) {
            if (data[input] === '') {
                alertFnMessage('All fields are require!');
                return;
            }
            if (input == 'price' && data[input] < 0) {
                alertFnMessage('Price must be a positive number');
                return;
            }
            if (typeof data[input] == 'string') {
                data[input] = data[input].trim();
            }
        }

        await updateProduct(productId, data);
        form.reset();
        ctx.page.redirect(`/catalog/${productId}`);
    }
}

