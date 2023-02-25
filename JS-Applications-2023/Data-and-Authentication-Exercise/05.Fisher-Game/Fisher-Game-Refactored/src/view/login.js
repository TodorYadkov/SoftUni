import { loginUser } from '../api/users.js';
import { setUserData } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="login-view">
    <h2>Login</h2>
    <form @submit=${onLogin} id="login">
        <label>Email: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <p class="notification"></p>
        <button>Login</button>
    </form>
</section>`;

export async function showLogin(context) {
    ctx = context;
    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email === '' || password === '') {
            form.querySelector('.notification').textContent = 'All fields are required';
            return;
        }

        const userData = await loginUser(email, password);
        setUserData(userData);
        form.reset();
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}