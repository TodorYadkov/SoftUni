import { deleteEvent } from '../api/data.js';

let ctx = null;

export async function removeTheater(context) {
    ctx = context;
    const theaterId = ctx.params.id;
    await deleteEvent(theaterId);

    ctx.page.redirect('/profile');
} 