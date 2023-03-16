import { createComment, getCommentsByRecipeId } from '../api/data.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const commentsTemplate = (recipe, comments, postNewComment) => ctx.html`
<div class="section-title">
    Comments for ${recipe.name}
    <div class="comments">
        ${commentsList(comments)}
    </div>
</div>
${ctx.userData !== null ? commentFormTemplate(postNewComment) : null}`;

const commentFormTemplate = (postNewComment) => ctx.html`
<article class="new-comment">
    <h2>New comment</h2>
    <form @submit=${postNewComment} id="commentForm">
        <textarea name="content" placeholder="Type comment"></textarea>
        <input type="submit" value="Add comment">
    </form>
</article>`;

const commentsList = (comments) => ctx.html`
<ul>
    ${comments.map(comment)}
</ul>`;

const comment = (data) => ctx.html`
<li class="comment">
    <header>${data.createdUser}</header>
    <p>${data.content}</p>
</li>`;

export function showComments(recipe, comments, context) {
    ctx = context;

    const recipeId = recipe._id;

    return commentsTemplate(recipe, comments, postNewComment);

    async function postNewComment(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        if (formData.get('content') === '') {
            return alertFnMessage('Comment cannot be empty!');
        }

        const comment = {
            recipeId,
            content: formData.get('content').trim(),
            createdUser: ctx.userData.email,
        };

        await createComment(comment);
        form.reset();
        ctx.page.redirect(`/catalog/${recipeId}`);
    };
}










































// import { getCommentsByRecipeId } from '../api/data.js';

// let ctx = null;

// const commentsTemplate = (recipe, commentForm, comments) => ctx.html`
// <div class="section-title">
//     Comments for ${recipe.name}
// </div>
// ${commentForm}
// <div class="comments">
//     ${ctx.until((async () => commentsList(await comments))(), 'Loading comments...')}
// </div>`;

// const commentFormTemplate = (active, toggleForm) => html`
// <article class="new-comment">
//     ${active
//         ? html`
//     <h2>New comment</h2>
//     <form id="commentForm">
//         <textarea name="content" placeholder="Type comment"></textarea>
//         <input type="submit" value="Add comment">
//     </form>`
//         : html`<form><button class="button" @click=${toggleForm}>Add comment</button></form>`}
// </article>`;

// const commentsList = (comments) => html`
// <ul>
//     ${comments.map(comment)}
// </ul>`;

// const comment = (data) => html`
// <li class="comment">
//     <header>${data.author.email}</header>
//     <p>${data.content}</p>
// </li>`;

// export function showComments(recipe, context) {
//     ctx = context;
//     let formActive = false;

//     const commentsPromise = getCommentsByRecipeId(recipe._id);
//     const result = document.createElement('div');
//     renderTemplate(commentsPromise);

//     function renderTemplate(comments) {
//         ctx.render(commentsTemplate(recipe, createForm(formActive, toggleForm), comments), result);
//     }

//     function toggleForm() {
//         formActive = !formActive;
//         renderTemplate(commentsPromise);
//     }

//     async function onSubmit(data) {
//         toggleForm();
//         const comments = await commentsPromise;

//         const comment = {
//             content: data.content,
//             recipeId: recipe._id
//         };

//         const result = await createComment(comment);

//         comments.unshift(result);
//         renderTemplate(comments);
//     }
// }

// function createForm(formActive, toggleForm) {
//     const userId = sessionStorage.getItem('userId');
//     if (userId == null) {
//         return '';
//     } else {
//         return commentFormTemplate(formActive, toggleForm);
//     }
// }