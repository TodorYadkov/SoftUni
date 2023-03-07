import { userRegister } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const loginTemplate = (onRegister) => ctx.html`
<section id="register-page" class="auth">
    <form @submit=${onRegister} id="register">
        <h1 class="title">Register</h1>
        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>
        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>
        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>
        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>
`;

export async function registerShow(context) {
    ctx = context;
    ctx.render(loginTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const inputData = {
            email: formData.get('email').trim(),
            password: formData.get('password').trim(),
        };
        if (inputData.email === '' || inputData.password === '') {
            alertFnMessage('All fields are required!');
            return;
        }
        if (inputData.password !== formData.get('repeatPassword')) {
            alertFnMessage('Password don\'t match!');
            return;
        }

        const userData = await userRegister(inputData);
        form.reset();
        setSessionStorageData(userData);
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}