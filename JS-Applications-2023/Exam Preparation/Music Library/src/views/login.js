import { userLogin } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onLogin} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`;

export async function showLogin(context) {
    ctx = context;
    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();
        const form = event.target;
        const userInput = Object.fromEntries(new FormData(form));

        if (userInput.email === '' || userInput.password === '') {
            alertFnMessage('All fields are required!');
            return;
        }

        const data = await userLogin(userInput);
        form.reset();
        setSessionStorageData(data);
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}