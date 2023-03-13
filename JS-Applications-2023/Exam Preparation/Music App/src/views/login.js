import { userLogin } from '../api/users.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="loginPage">
    <form @submit=${onLogin}>
        <fieldset>
            <legend>Login</legend>
            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">
            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">
            <button type="submit" class="login">Login</button>
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`;

export async function showLogin(context) {
    ctx = context;
    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();
        const form = event.target;
        const { email, password } = Object.fromEntries(new FormData(form));
        if (email === '' || password === '') {
            alertFnMessage('All fields are required!');
            return;
        }

        await userLogin({ email, password });
        form.reset();
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}