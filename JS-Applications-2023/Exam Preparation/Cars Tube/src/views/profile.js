import { getMyCar } from '../api/data.js';

let ctx = null;

const profileTemplate = (myCars) => ctx.html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
    ${myCars.length === 0 
        ? ctx.html`<p class="no-cars"> You haven't listed any cars yet.</p>`
        : myCars.map(cardCar)}
    </div>
</section>
`;

const cardCar = (car) => ctx.html`
<div class="listing">
    <div class="preview">
        <img src="${car.imageUrl}">
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/catalog/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>
`;

export async function showProfile(context) {
    ctx = context;
    const myCars = await getMyCar(ctx.userData._id);
    ctx.render(profileTemplate(myCars));
}