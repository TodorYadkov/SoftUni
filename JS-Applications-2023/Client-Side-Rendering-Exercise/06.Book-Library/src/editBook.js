const endPoint = 'jsonstore/collections/books/';
const body = document.querySelector('body');

export async function editBook(ctx, id) {
    const addForm = [];
    let indexAddFormRemove = -1;
    ctx.template.forEach((el, index) => {
        if (el.strings[0].includes('add-form')) {
            addForm.push(el);
            indexAddFormRemove = index;
        }
    });

    ctx.template.splice(indexAddFormRemove, 1);

    const currentBook = await ctx.api.get(endPoint + id);
    const editTemplate = ctx.html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value="${currentBook.title}">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." value="${currentBook.author}">
        <input type="submit" value="Save" @click="${(e) => completeEdit(e, ctx, id, addForm)}">
    </form>
    `;

    ctx.template.push(editTemplate);
    ctx.render(ctx.template, body);
}

async function completeEdit(event, ctx, id, addForm) {
    event.preventDefault();

    const form = document.querySelector('#edit-form');
    const allFormData = new FormData(form);
    const formData = {
        title: allFormData.get('title'),
        author: allFormData.get('author'),
    };

    for (const input in formData) {
        if (formData[input] === '') {
            return;
        }

        formData[input] = formData[input].trim();
    }

    ctx.api.put(endPoint + id, formData);
    form.reset();
    ctx.template.pop();
    ctx.template.push(addForm[0]);
    ctx.render(ctx.template, body);
}