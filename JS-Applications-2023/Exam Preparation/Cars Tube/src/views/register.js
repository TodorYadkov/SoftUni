import { userRegister } from '../api/users.js';
import { alertFnMessage } from '../util.js';

let ctx = null;

const registerTemplate = (onRegister) => ctx.html`
<section id="register">
    <div class="container">
        <form @submit=${onRegister} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>
            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>
            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>
            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>
`;

export async function showRegister(context) {
    ctx = context;
    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('repeatPass').trim();
        if (username === '' || password === '') {
            alertFnMessage('All fields are required!');
            return;
        }

        if (password !== rePass) {
            alertFnMessage('The password does not match!');
            return;
        }

        await userRegister({ username, password });
        form.reset();
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}