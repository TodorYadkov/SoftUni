import { userRegister } from '../api/users.js';
import { alertFnMessage, setSessionStoreData } from '../util.js';

let ctx = null;

const registerTemplate = (onRegister) => ctx.html`
<section id="register">
    <article>
        <h2>Register</h2>
        <form @submit=${onRegister} id="registerForm">
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="rePass"></label>
            <input type="submit" value="Register">
        </form>
    </article>
</section>`;


export function showRegister(context) {
    ctx = context;
    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();
        const form = event.target;
        const { email, password, rePass } = Object.fromEntries(new FormData(form));
        if (email === '' || password === '') {
            return alertFnMessage('All fields are required!');
        }
        if (rePass !== password) {
            return alertFnMessage('Password don\'t match!');
        }

        const userData = await userRegister({ email, password });
        setSessionStoreData(userData);
        form.reset();
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}