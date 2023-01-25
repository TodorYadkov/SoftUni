const onSubmit = async (event) => {
    event.preventDefault();

    // Get the elements of the form
    const formData = [...new FormData(event.target.parentElement)]
        .reduce((acc, value) => Object.assign(acc, { [value[0]]: value[1] }), {});
    // Check that the email and password are correct
    if (formData.email === '' || /^\w+@\w+\.[a-z]+/gi.test(formData.email) === false) {
        alert('Please enter a valid email');
    }

    if (formData.password === '') {
        alert('Please enter a valid password');
    }
    // Make the body of the post request
    const body = JSON.stringify({
        email: formData.email,
        password: formData.password,
    });
    // Send a post request to the server
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        });

        if (response.ok === false) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();
        // Save the received accessToken into a session storage - session storage allows data to be stored in the browser
        sessionStorage.setItem('authenticationToken', data.accessToken);
        window.location = 'index.html';

    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};
// Get submit buuton
document.querySelector('main form input[type="submit"]').addEventListener('click', onSubmit);