const registerFn = async (event) => {
    event.preventDefault();
    // Get the elements of the form
    const form = document.querySelector('main form');
    const inputs = [...new FormData(form)].reduce((acc, value) => Object.assign(acc, { [value[0]]: value[1] }), {});
    // Check that the email and password are correct
    if (inputs.email === '' || /^\w+@\w+\.[a-z]+/gi.test(inputs.email) === false) {
        alert('Please enter a valid email');
        return;
    }

    if (inputs.password === '' || inputs.password !== inputs.rePass) {
        alert('Please enter a valid password');
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputs.email,
                password: inputs.password,
            }),
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();
        sessionStorage.setItem('authenticationToken', data.accessToken);

        window.location = 'index.html';

    } catch (error) {
        alert(error.message);
    }
};

document.querySelector('main form input[type="submit"]').addEventListener('click', registerFn);