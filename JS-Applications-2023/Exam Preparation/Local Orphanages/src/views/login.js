import { userLogin } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="login-page" class="auth">
    <form @submit=${onLogin} id="login">
        <h1 class="title">Login</h1>
        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>
        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>
        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>
`;

export async function loginShow(context) {
    ctx = context;
    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const inputData = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        if (inputData.email === '' || inputData.password === '') {
            alertFnMessage('All fields are required!');
            return;
        }

        const userData = await userLogin(inputData);
        form.reset();
        setSessionStorageData(userData);
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}