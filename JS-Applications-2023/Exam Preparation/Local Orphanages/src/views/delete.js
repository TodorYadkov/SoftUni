import { deletePost } from '../api/data.js';

let ctx = null;

export async function postDelete(context) {
    ctx = context;
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
        const postId = ctx.params.id;
        await deletePost(postId);
        ctx.page.redirect('/catalog');
    }
}