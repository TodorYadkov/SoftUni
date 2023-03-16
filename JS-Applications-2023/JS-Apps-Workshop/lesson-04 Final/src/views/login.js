import { userLogin } from '../api/users.js';
import { alertFnMessage, setSessionStoreData } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="login">
    <article>
        <h2>Login</h2>
        <form @submit=${onLogin} id="loginForm">
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input type="submit" value="Login">
        </form>
    </article>
</section>`;

export function showLogin(context) {
    ctx = context;
    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();
        const form = event.target;
        const { email, password } = Object.fromEntries(new FormData(form));
        if (email === '' || password === '') {
            return alertFnMessage('All fields are required!');
        }

        const userData = await userLogin({ email, password });
        setSessionStoreData(userData);
        form.reset();
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}