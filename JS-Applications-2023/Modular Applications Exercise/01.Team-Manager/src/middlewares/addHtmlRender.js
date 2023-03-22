import { html, render } from '../lib.js';
import { footerLayout } from '../layouts/footerLayout.js';
import { mainLayout } from '../layouts/mainLayout.js';
import { modalNotifierLayout } from '../layouts/modalNotifierLayout.js';
import { userNavLayout } from '../layouts/userNavigationLayout.js';

let ctx = null;
const body = document.body;

export function addHtmlRender(context, next) {
    ctx = context;
    ctx.html = html;
    ctx.render = customRender;
    next();
}

function customRender(content) {
    render(mainLayout(ctx, userNavLayout(ctx), content, footerLayout(ctx), modalNotifierLayout(ctx)), body);
}