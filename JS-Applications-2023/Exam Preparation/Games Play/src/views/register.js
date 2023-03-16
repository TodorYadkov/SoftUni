import { userRegister } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const registerTemplate = (onRegister) => ctx.html`
<section id="register-page" class="content auth">
    <form @submit=${onRegister} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">
            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">
            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">
            <input class="btn submit" type="submit" value="Register">
            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
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
        const rePass = formData.get('confirm-password');

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