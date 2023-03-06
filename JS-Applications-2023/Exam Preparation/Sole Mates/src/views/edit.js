import { getShoeById, updateShoe } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const editTemplate = (shoeInfo, onEdit) => ctx.html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoeInfo.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoeInfo.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoeInfo.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoeInfo.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoeInfo.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoeInfo.value} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editShow(context) {
    ctx = context;
    const productId = ctx.params.productId;
    const shoeInfo = await getShoeById(productId);
    ctx.render(editTemplate(shoeInfo, onEdit));

    async function onEdit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const userInput = {
            brand: formData.get('brand'),
            model: formData.get('model'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            designer: formData.get('designer'),
            value: formData.get('value'),
        };

        for (const input in userInput) {
            if (userInput[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }
            userInput[input] = userInput[input].trim();
        }

        await updateShoe(productId, userInput);
        ctx.page.redirect(`/catalog/${productId}`);
    }
}
