import { userLogin } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="login-page" class="auth">
    <form @submit=${onLogin} id="login">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">
            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>

`;

export async function showLogin(context) {
    ctx = context;
    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();
        const form = event.target;
        const input = Object.fromEntries(new FormData(form));
        if (input.email == '' || input.password == '') {
            alertFnMessage('All fields are required!');
            return;
        }

        const data = await userLogin(input);
        form.reset();
        setSessionStorageData(data);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
} 