window.addEventListener('load', solve);

function solve() {
    document.getElementById('add').addEventListener('click', addFurniture);

    function addFurniture(event) {
        event.preventDefault();

        const sections = {
            furnitureList: document.getElementById('furniture-list'),
            totalPrice: document.querySelector('.total-price'),
        };
        const inputs = {
            model: document.getElementById('model'),
            year: document.getElementById('year'),
            description: document.getElementById('description'),
            price: document.getElementById('price'),
        };
        const model = inputs.model.value;
        const year = inputs.year.value;
        const description = inputs.description.value;
        const price = inputs.price.value;

        if (model === '' ||
            description === '' ||
            year === '' ||
            price === '' ||
            year < 0 ||
            price < 0) {
            return;
        }

        const trInfo = generateEl('tr', '', sections.furnitureList, { class: 'info' });
        const tdChair = generateEl('td', model, trInfo);
        const tdPrice = generateEl('td', Number(price).toFixed(2), trInfo);
        const tdBtns = generateEl('td', '', trInfo);
        const moreInfoBtn = generateEl('button', 'More Info', tdBtns, { class: 'moreBtn' });
        const buyBtn = generateEl('button', 'Buy it', tdBtns, { class: 'buyBtn' });
        const trHide = generateEl('tr', '', sections.furnitureList, { class: 'hide' });
        const tdYear = generateEl('td', `Year: ${year}`, trHide);
        const tdDescription = generateEl('td', `Description: ${description}`, trHide, { colspan: '3' });
        moreInfoBtn.addEventListener('click', moreInfoFn);
        buyBtn.addEventListener('click', buyFn);

        // clear inputs fields
        for (const field in inputs) {
            inputs[field].value = '';
        }

        function moreInfoFn() {
            moreInfoBtn.textContent === 'More Info' ? moreInfoBtn.textContent = 'Less Info' : moreInfoBtn.textContent = 'More Info';
            trHide.style.display === 'contents' ? trHide.style.display = 'none' : trHide.style.display = 'contents';
        }

        function buyFn() {
            trInfo.remove();
            trHide.remove();
            // add the current price to the total
            sections.totalPrice.textContent = (Number(sections.totalPrice.textContent) + Number(price)).toFixed(2);
        }
    }

    function generateEl(typeEl, content, parent, attributes) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attributes) {
            for (const attr in attributes) {
                el.setAttribute(attr, attributes[attr]);
            }
        }

        parent.appendChild(el);
        return el;
    }
}