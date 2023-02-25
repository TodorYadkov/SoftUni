import { registerUser } from '../api/users.js';
import { setUserData } from '../util.js';

let ctx = null;

const registerTemplate = (registerFn) => ctx.html`
<section id="register-view">
    <h2>Register</h2>
    <form @submit=${registerFn} id="register">
        <label>Email: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <label>Repeat: <input type="password" name="rePass"></label>
        <p class="notification"></p>
        <button>Register</button>
    </form>
</section>
`;

export async function showRegister(context) {
    ctx = context;
    ctx.render(registerTemplate(registerFn));

    async function registerFn(event) {
        event.preventDefault();
        const form = event.target;
        const notification = form.querySelector('.notification');
        const formData = new FormData(form);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();

        if (email === '' || password === '') {
            notification.textContent = 'All fields are required!';
            return;
        }
        if (password !== rePass) {
            notification.textContent = 'Password doesn\'t match!';
            return;
        }

        const userData = await registerUser(email, password);
        setUserData(userData);
        form.reset();
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}