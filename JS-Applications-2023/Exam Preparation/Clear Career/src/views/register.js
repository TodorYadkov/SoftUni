import { userRegister } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const registerTemplate = (onRegister) => ctx.html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit="${onRegister}" class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
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
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('re-password');

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
        ctx.page.redirect('/catalog');
    }
}