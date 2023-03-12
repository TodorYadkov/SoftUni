import { userRegister } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const registerTemplate = (onRegister) => ctx.html`
<section id="registerPage">
    <form @submit=${onRegister} class="registerForm">
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>
        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>
        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>
        <button class="btn" type="submit">Register</button>
        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
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
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('repeatPassword');

        if (email == '' || password == '') {
            alertFnMessage('All fields are required!');
            return;
        }
        if (password != rePass) {
            alertFnMessage('Password don\'t match!');
            return;
        }

        const data = await userRegister({ email, password });
        form.reset();
        setSessionStorageData(data);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
} 