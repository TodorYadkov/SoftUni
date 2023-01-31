// Array for all products
const productsList = [];

// Check which page is open
if (window.location.href.slice(-10) === 'index.html') {
  loadAllProducts();
} else if (window.location.href.slice(-10) === 'login.html') {
  document.querySelector('.col-md-12 [action="/register"]').addEventListener('submit', registerFn);
  document.querySelector('.col-md-12 [action="/login"]').addEventListener('submit', loginFn);
} else if (window.location.href.slice(-15) === 'homeLogged.html') {
  document.getElementById('logoutBtn').addEventListener('click', logoutFn);
  document.querySelector('.col-md-12 form[method="post"]').addEventListener('submit', createProductFn);
  document.querySelectorAll('.col-md-12 button')[1].addEventListener('click', buyFn);
  document.querySelectorAll('.col-md-12 button')[2].addEventListener('click', allOrdersFn);
  loadAllProducts();
}

// Load all products
function loadAllProducts() {
  // Remove all current items
  document.querySelector('#exercise .table>tbody').replaceChildren();

  fetch('http://localhost:3030/data/furniture')
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText} - ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      // Generate all table contents on load with checkboxes disabled
      data.forEach(objProduct => {
        createContent.call(objProduct);
      });
    })
    .catch(error => alert(error.message));
}

// Register
async function registerFn(event) {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));
  const notificationPlace = document.querySelectorAll('h2')[0];
  if (notificationPlace.children[0] !== undefined) {
    notificationPlace.children[0].remove();
  }

  if (validateInput.call(formData, notificationPlace) === false) {
    return;
  }

  if (formData.password !== formData.rePass) {
    const errorMessageP = document.createElement('p');
    errorMessageP.textContent = 'Passwords are not the same';
    errorMessageP.style.webkitTextFillColor = 'red';
    notificationPlace.appendChild(errorMessageP);
    return;
  }

  try {
    const response = await fetch('http://localhost:3030/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      }),
    });
    if (response.status !== 200) {
      throw new Error(`Error: ${response.statusText} - ${response.status}`);
    }

    const data = await response.json();
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('id', data._id);
    window.location = 'homeLogged.html';

  } catch (error) {
    alert(error.message);
  }
}

// Login
async function loginFn(event) {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));
  const notificationPlace = document.querySelectorAll('h2')[1];
  if (notificationPlace.children[0] !== undefined) {
    notificationPlace.children[0].remove();
  }

  if (validateInput.call(formData, notificationPlace) === false) {
    return;
  }

  try {
    const response = await fetch('http://localhost:3030/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    if (response.status !== 200) {
      throw new Error(`Error: ${response.statusText} - ${response.status}`);
    }

    const data = await response.json();

    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('id', data._id);
    window.location = 'homeLogged.html';

  } catch (error) {
    alert(error.message);
  }
}

// Logout
async function logoutFn() {
  try {
    const response = await fetch('http://localhost:3030/users/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': sessionStorage.getItem('accessToken'),
      },
    });

    // https://github.com/softuni-practice-server/softuni-practice-server
    if (response.status !== 204) {
      throw new Error(`Error: ${response.statusText} - ${response.status}`);
    }

    sessionStorage.removeItem('accessToken');
    window.location = 'index.html';

  } catch (error) {
    alert(error.message);
  }
}

// Create a product from a registered user - by clicking the [Create] button
function createProductFn(event) {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));
  if (!formData.name || (typeof Number(formData.price) !== 'number') || (typeof Number(formData.decFactor) !== 'number')) {
    return;
  }

  fetch('http://localhost:3030/data/furniture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': sessionStorage.getItem('accessToken'),
    },
    body: JSON.stringify(formData),
  });

  createContent.call(formData);
  loadAllProducts();
  event.target.reset();
}

// Buy furniture by clicking the button [Buy] (for registered users only)
async function buyFn() {
  const body = [];
  const selectedProducts = productsList
    .filter(f => f.check.checked === true)
    .forEach(el => body.push({ img: el.img, name: el.name, price: el.price, decFactor: el.decFactor }));
  if (body.length === 0) {
    alert('Please select a product');
    return;
  }

  try {
    const response = await fetch('http://localhost:3030/data/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': sessionStorage.getItem('accessToken'),
      },
      body: JSON.stringify({ orders: body }),
    });
    if (response.status !== 200) {
      throw new Error(`Error: ${response.statusText} - ${response.status}`);
    }

  } catch (error) {
    alert(error.message);
  }
}

// Display all orders - by clicking the button [All orders] (for registered users only)
async function allOrdersFn() {
  try {
    const id = sessionStorage.getItem('id');
    const response = await fetch('http://localhost:3030/data/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': sessionStorage.getItem('accessToken'),
      },
    });
    if (response.status !== 200) {
      throw new Error(`Error: ${response.statusText} - ${response.status}`);
    }

    const purchasedProducts = { price: 0, names: [] };
    const data = await response.json();
    // The learning server does not allow selection, but the task requires it
    const selectedProducts = Object.values(data).filter(el => el._ownerId === id);
    selectedProducts.forEach(order => {
      order.orders.forEach(el => {
        purchasedProducts.price += Number(el.price);
        purchasedProducts.names.push(el.name);
      });
    });

    if (purchasedProducts.names.length === 0) {
      throw new Error('No purchases available');
    }

    const orders = document.querySelector('.orders');
    if (orders.children.length === 3) {
      orders.children[2].remove();
      orders.children[1].remove();
    }

    generateEl('span', generateEl('p', orders, { textContent: 'Bought furniture: ' }), { textContent: purchasedProducts.names.join(', ') });
    generateEl('span', generateEl('p', orders, { textContent: 'Total price: ' }), { textContent: `${purchasedProducts.price} $` });

  } catch (error) {
    alert(error.message);
  }
}

// Validate input
function validateInput(notification) {

  const errorMessageP = document.createElement('p');
  errorMessageP.style.webkitTextFillColor = 'red';
  notification.appendChild(errorMessageP);

  if (!this.email || /^\w+@\w+\.[a-z]+/gi.test(this.email) === false) {
    errorMessageP.textContent = 'Please enter a valid email';
    return false;
  }

  if (!this.password) {
    errorMessageP.textContent = 'Please enter a valid password';
    return false;
  }

  errorMessageP.remove();
  return true;
}

// Create table contents for each row
function createContent() {
  const tr = generateEl('tr', document.querySelector('#exercise .table>tbody'));
  generateEl('img', generateEl('td', tr), { src: this.img });
  generateEl('p', generateEl('td', tr), { textContent: this.name });
  generateEl('p', generateEl('td', tr), { textContent: this.price });
  generateEl('p', generateEl('td', tr), { textContent: this.decFactor });
  const isDisabled = sessionStorage.getItem('accessToken') === null ? true : false;
  const check = generateEl('input', generateEl('td', tr), { type: 'checkbox', disabled: isDisabled });

  // Create productList array
  productsList.push({
    check,
    img: this.img,
    name: this.name,
    price: this.price,
    decFactor: this.decFactor,
  });
}

// Generate HTML element
function generateEl(typeEl, parent, attributes) {
  const el = document.createElement(typeEl);
  if (attributes) {
    Object.assign(el, attributes);
  }

  parent.appendChild(el);
  return el;
}

// The task is to train a fetch request to the server. Nothing else is required.
// 1.   Select HTML element
// 2.   When the page is loaded the app should list all the furnitures in a table
// 2.1. Make GET request to: http://localhost:3030/data/furniture
// 2.2. The checkbox should be disabled.
// 3.   When "Login" is clicked, the app should redirect to "Login page"
// 4.   To register a new user, send a POST request to the URL: http://localhost:3030/users/register
// 5.   To login, send a POST request to the URL: http://localhost:3030/users/login
// 5.1  Enable checkbox
// 6.   When the "Create" button is clicked, add a new row to the table for each piece of furniture with name, price, factor and img.
// 6.1. Send POST request to: http://localhost:3030/data/furniture
// 7.   When the "Buy" button is clicked, get all checkboxes that are marked and save the information for these orders on the server.
// 7.1  Make POST request to: http://localhost:3030/data/orders
// 8.   When the "All orders" button is clicked, get all bought furniture of the current user, and show their names and the total price
// 8.1  Make GET request to URL: http://localhost:3030/data/orders?where=_ownerId%3D{userId}