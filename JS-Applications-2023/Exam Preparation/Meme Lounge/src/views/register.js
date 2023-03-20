import { userRegister } from '../api/users.js';
import { alertFnMessage, setSessionStorageData } from '../util.js';

let ctx = null;

const registerTemplate = (onRegister) => ctx.html`
<section id="register">
    <form @submit=${onRegister} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export function showRegister(context) {
    ctx = context;
    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = Object.fromEntries(new FormData(form));
        for (const input in formData) {
            if (formData[input] === '') {
                alertFnMessage('All fields are required!');
                return;
            }

            if (input !== 'gender') {
                formData[input] = formData[input].trim();
            }
        }

        if (formData.password !== formData.repeatPass) {
            alertFnMessage('The passwords do not match!');
            return;
        }

        const { username, email, password, gender } = formData;
        const userData = await userRegister(username, email, password, gender);
        setSessionStorageData(userData);
        form.reset();
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}