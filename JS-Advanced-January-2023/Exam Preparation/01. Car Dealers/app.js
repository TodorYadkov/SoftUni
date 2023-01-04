window.addEventListener('load', solve);

function solve() {
  const publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publishFn);
  const sections = {
    contentTBody: document.getElementById('table-body'),
    sellCar: document.getElementById('cars-list'),
    profit: document.getElementById('profit'),
  };

  function publishFn(event) {
    event.preventDefault();
    const inputs = {
      make: document.getElementById('make'),
      model: document.getElementById('model'),
      year: document.getElementById('year'),
      fuel: document.getElementById('fuel'),
      originalCost: document.getElementById('original-cost'),
      sellingPrice: document.getElementById('selling-price'),
    };
    const make = inputs.make.value;
    const model = inputs.model.value;
    const year = inputs.year.value;
    const fuel = inputs.fuel.value;
    const originalCost = inputs.originalCost.value;
    const sellingPrice = inputs.sellingPrice.value;

    if (make === '' ||
      model === '' ||
      year === '' ||
      fuel === '' ||
      originalCost === '' ||
      sellingPrice === '' ||
      Number(originalCost) > Number(sellingPrice)) {
      return;
    }

    const tr = generateEl('tr', '', sections.contentTBody, 'row');
    const tdMake = generateEl('td', make, tr);
    const tdModel = generateEl('td', model, tr);
    const tdYear = generateEl('td', year, tr);
    const tdFuel = generateEl('td', fuel, tr);
    const tdOriginalCost = generateEl('td', originalCost, tr);
    const tdSellingPrice = generateEl('td', sellingPrice, tr);
    const tdButtons = generateEl('td', '', tr);
    const editBtn = generateEl('button', 'Edit', tdButtons, 'action-btn edit');
    const sellBtn = generateEl('button', 'Sell', tdButtons, 'action-btn sell');
    editBtn.addEventListener('click', editFn);
    sellBtn.addEventListener('click', sellFn);

    // Clear input fields
    for (let field in inputs) {
      inputs[field].value = '';
    }

    function editFn() {
      sections.contentTBody.removeChild(tr);
      inputs.make.value = make;
      inputs.model.value = model;
      inputs.year.value = year;
      inputs.fuel.value = fuel;
      inputs.originalCost.value = originalCost;
      inputs.sellingPrice.value = sellingPrice;
    }

    function sellFn() {
      sections.contentTBody.removeChild(tr);
      const profit = Number(sellingPrice) - Number(originalCost);
      const li = generateEl('li', '', sections.sellCar, 'each-list');
      const spanMakeModel = generateEl('span', `${make} ${model}`, li);
      const spanYear = generateEl('span', year, li);
      const spanProfit = generateEl('span', profit, li);

      sections.profit.textContent = (Number(sections.profit.textContent) + profit).toFixed(2);
    }
  }

  function generateEl(typeEl, content, parent, nameClass) {
    const el = document.createElement(typeEl);
    el.textContent = content;
    if (nameClass) {
      el.className = nameClass;
    }

    parent.appendChild(el);
    return el;
  }
}