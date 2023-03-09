import { userLogin } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="loginPage">
    <form @submit=${onLogin} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>
        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>
        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>
        <button class="btn" type="submit">Login</button>
        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
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