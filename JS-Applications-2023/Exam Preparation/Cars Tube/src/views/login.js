import { userLogin } from '../api/users.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="login">
    <div class="container">
        <form @submit=${onLogin} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>
            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">
            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>
`;

export async function showLogin(context) {
    ctx = context;
    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();
        const form = event.target;
        const { username, password } = Object.fromEntries(new FormData(form));
        if (username === '' || password === '') {
            alertFnMessage('All fields are required!');
            return;
        }

        await userLogin({ username, password });
        form.reset();
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}