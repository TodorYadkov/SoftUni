import { userRegister } from '../api/users.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

const registerTemplate = (onRegister) => ctx.html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onRegister} id="register-form" class="main-form pad-large">
            <div style="display: none" class="error">Error message.</div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>
`;

export function showRegister(context) {
    ctx = context;
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister(userInput, form) {
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
            if (input === 'username' && (userInput[input].length < 3)) {
                errorEl.style.display = '';
                errorEl.textContent = 'Username must be at least 3 characters long!', 'Try again';
                return;
            }
            if (input === 'password' && (userInput[input].length < 3)) {
                errorEl.style.display = '';
                errorEl.textContent = 'Password must be at least 3 characters long!', 'Try again';
                return;
            }

            userInput[input] = userInput[input].trim();
        }

        if (userInput.password !== userInput.repass) {
            errorEl.style.display = '';
            errorEl.textContent = 'Password does not match!', 'Try again';
            return;
        }

        const { email, username, password, repass } = userInput;
        await userRegister({ email, username, password, repass });
        form.reset();
        ctx.page.redirect('/my-teams');
    }
}