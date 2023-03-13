import { userRegister } from '../api/users.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const registerTemplate = (onRegister) => ctx.html`
<section id="registerPage">
    <form @submit=${onRegister}>
        <fieldset>
            <legend>Register</legend>
            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">
            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">
            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">
            <button type="submit" class="register">Register</button>
            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`;

export async function showRegister(context) {
    ctx = context;
    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('conf-pass').trim();
        if (email === '' || password === '') {
            alertFnMessage('All fields are required!');
            return;
        }

        if (password !== rePass) {
            alertFnMessage('The password does not match!');
            return;
        }

        await userRegister({ email, password });
        form.reset();
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}