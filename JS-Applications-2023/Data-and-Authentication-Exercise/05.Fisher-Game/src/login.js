// Get all the buttons and add or remove class
const [btnHome, btnLogout, btnLogin, btnRegister] = [...document.querySelectorAll('a')];
btnLogout.addEventListener('click', logoutFn);
btnHome.classList.remove('active');
btnLogin.classList.add('active');
// Hide button logout
if (sessionStorage.getItem('accessToken') === null) {
    btnLogout.style.display = 'none';

    const p = document.createElement('p');
    p.className = 'email';
    p.textContent = 'Please login';
    p.style.webkitTextFillColor = 'red';

    document.querySelector('nav>p').replaceWith(p);
} else {
    // Hide login and register buttons
    document.querySelector('#guest').style.display = 'none';
}
// Get inputs
const form = document.getElementById('login-form');
form.addEventListener('submit', login);
// Send POST request to server - save the received accessToken in sessionStorage
async function login(event) {
    event.preventDefault();
    // Transform input to object
    const formData = Object.fromEntries(new FormData(form));
    // Check is password and email are valid
    const notification = document.querySelector('#login-form>p');
    if (!formData.email || /^\w+@\w+\.[a-z]+/gi.test(formData.email) === false) {
        notification.textContent = 'Please enter a valid email';
        return;
    }

    if (!formData.password) {
        notification.textContent = 'Please enter a valid password';
        return;
    }
    // Remove any spaces
    formData.email = formData.email.trim();
    formData.password = formData.password.trim();

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.assign({}, formData)),
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();
        // Save the access token, email and idOwner in seesion storage
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('userName', formData.email);
        sessionStorage.setItem('idOwner', data['_id']);
        window.location = 'index.html';

    } catch (error) {
        document.querySelector('#login-form>p').textContent = error.message;
    }
}

// Logout and clear all session information
function logoutFn() {
    fetch('http://localhost:3030/users/logout')
        .then(response => {
            if (response.status !== 204) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            sessionStorage.clear();
            window.location = 'index.html';
        })
        .catch(error => alert(error.message));
}