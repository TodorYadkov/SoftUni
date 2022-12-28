window.addEventListener('load', solve);

function solve() {
  document.querySelector('#right button').addEventListener('click', addTask);
  document.querySelector('#completed-orders button').addEventListener('click', clearFn);

  function addTask(event) {
    event.preventDefault();
    const sections = {
      receivedOrders: document.getElementById('received-orders'),
      completedOrders: document.getElementById('completed-orders'),
    };
    const input = {
      typeProduct: document.getElementById('type-product'),
      description: document.getElementById('description'),
      name: document.getElementById('client-name'),
      phone: document.getElementById('client-phone'),
    };

    if (input.description.value === '' || input.name.value === '' || input.phone.value === '') {
      return;
    }

    const div = document.createElement('div');
    div.className = 'container';
    const h2 = generateEl('h2', `Product type for repair: ${input.typeProduct.value}`, div);
    const h3 = generateEl('h3', `Client information: ${input.name.value}, ${input.phone.value}`, div);
    const h4 = generateEl('h4', `Description of the problem: ${input.description.value}`, div);
    const startBtn = generateEl('button', 'Start repair', div, 'start-btn');
    const finishBtn = generateEl('button', 'Finish repair', div, 'finish-btn');

    finishBtn.disabled = true;
    startBtn.addEventListener('click', startRepairFn);
    finishBtn.addEventListener('click', finishRepairFn);

    sections.receivedOrders.appendChild(div);
    // clear all input field
    for (let field in input) {
      if (field !== 'typeProduct') {
        input[field].value = '';
      }
    }

    function startRepairFn() {
      startBtn.disabled = true;
      finishBtn.disabled = false;
    }

    function finishRepairFn() {
      sections.completedOrders.appendChild(div);
      startBtn.remove();
      finishBtn.remove();
    }
  }

  function clearFn() {
    const elementsToRemove = document.querySelectorAll('#completed-orders .container');

    for (let el of elementsToRemove) {
      el.remove();
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