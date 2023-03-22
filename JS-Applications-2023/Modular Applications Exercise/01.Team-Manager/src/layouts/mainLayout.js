export const mainLayout = (ctx, userNav, content, footer, modalNotifier) => ctx.html`
<div id="content">
    ${userNav}
    <main>
        ${content}
    </main>
    ${footer}
</div>
${modalNotifier}
`;