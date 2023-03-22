import { userLogin } from '../api/users.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

const loginTemplate = (onLogin) => ctx.html`
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit=${onLogin} id="login-form" class="main-form pad-large">
            <div class="error" style="display: none">Error message.</div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>
`;

export function showLogin(context) {
    ctx = context;
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin(userInput, form) {
        const paternEmail = /^\w+@[a-zA-Z]+\.[a-zA-Z]+/g;
        const errorEl = document.querySelector('.error');
        errorEl.style.display = 'none';

        for (const input in userInput) {
            if (userInput[input] === '') {
                errorEl.style.display = '';
                errorEl.textContent = 'All fields are required!', 'Try again';
                return;
            }
            if (input === 'email' && (paternEmail.test(userInput[input]) === false)) {
                errorEl.style.display = '';
                errorEl.textContent = 'The email is not valid!', 'Try again';
                return;
            }
            if (input === 'password' && (userInput[input].length < 3)) {
                errorEl.style.display = '';
                errorEl.textContent = 'Password must be at least 3 characters long!', 'Try again';
                return;
            }

            userInput[input] = userInput[input].trim();
        }

        const { email, password } = userInput;
        await userLogin({ email, password });
        form.reset();
        ctx.page.redirect('/my-teams');
    }
}