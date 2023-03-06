import { userRegister } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const registerTemplate = (onRegister) => ctx.html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onRegister} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`;

export async function registerShow(context) {
    ctx = context;
    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
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
        if (inputData.password !== formData.get('re-password')) {
            alertFnMessage('Password don\'t match!');
            return;
        }

        const data = await userRegister(inputData);
        form.reset();
        setSessionStorageData(data);
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}