import { onLogout } from '../views/logout.js';

export const userNavLayout = (ctx) => ctx.html`
<header id="titlebar" class="layout">
    <a href="/" class="site-logo">Team Manager</a>
    <nav>
    <a href="/catalog" class="action">Browse Teams</a>
    ${ctx.userData !== null 
        ? ctx.html`
            <a href="/my-teams" class="action">My Teams</a>
            <a @click=${() => onLogout(ctx)} href="javascript:void(0)" class="action">Logout</a>`
        : ctx.html`
            <a href="/login" class="action">Login</a>
            <a href="/register" class="action">Register</a>`}
    </nav>
</header>
`;