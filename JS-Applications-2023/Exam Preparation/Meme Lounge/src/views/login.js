import { userLogin } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="login">
    <form @submit=${onLogin} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export function showLogin(context) {
    ctx = context;
    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const { email, password } = Object.fromEntries(new FormData(form));
        if (email === '' || password === '') {
            alertFnMessage('All fields are required!');
            return;
        }

        const userData = await userLogin(email, password);
        form.reset();
        setSessionStorageData(userData);
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}