const form = document.querySelector('main form');

const createFn = async (event) => {
    event.preventDefault();

    const inputs = [...new FormData(form)].reduce((acc, curr) => Object.assign(acc, { [curr[0]]: curr[1] }), {});
    if (inputs.name === '' ||
        inputs.img === '' ||
        inputs.ingredients === '' ||
        inputs.steps === '') {
        alert('The input is incorrect');
        return;
    }

    const token = sessionStorage.getItem('authenticationToken');
    if (token === null) {
        alert('You are not authorized for this operation. Please login!');
        return window.location = 'login.html';
    }

    const body = JSON.stringify({
        name: inputs.name.trim(),
        img: inputs.img.trim(),
        ingredients: inputs.ingredients.split('\n').map(el => el.trim()).filter(el => el !== ''),
        steps: inputs.steps.split('\n').map(el => el.trim()).filter(el => el !== ''),
    });

    try {
        const response = await fetch('http://localhost:3030/data/recipes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token,
            },
            body: body,
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        window.location = 'index.html';
    } catch (error) {
        alert(error.message);
    }
};

form.addEventListener('submit', createFn);