const endPoint = 'jsonstore/collections/books/';

export function createBook(event, ctx) {
    event.preventDefault();

    const form = document.querySelector('#add-form');
    const formData = Object.fromEntries(new FormData(form));
    for (const input in formData) {
        if (formData[input] === '') {
            return;
        }

        formData[input] = formData[input].trim();
    }

    ctx.api.post(endPoint, formData);
    form.reset();
}