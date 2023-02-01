import { navBtns, clearActiveBtn, sections, showLess } from './dom.js';

// Show login page (<article>)
export function showLogin() {
    clearActiveBtn();
    navBtns.loginBtn.classList.add('active');

    const form = sections.loginArticle.getElementsByTagName('form')[0];
    form.addEventListener('submit', (e) => loginFn(e, form));
    sections.main.replaceChildren(sections.loginArticle);
}
// Login
export async function loginFn(event, formHTMLEl) {
    event.preventDefault();
    const userInputs = Object.fromEntries(new FormData(formHTMLEl));
    if (!userInputs.email.trim() || !userInputs.password.trim()) {
        return;
    }

    const body = {
        email: userInputs.email.trim(),
        password: userInputs.password.trim(),
    };

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();
        sessionStorage.setItem('userInfo', JSON.stringify({ userId: data._id, authToken: data.accessToken }));
        formHTMLEl.reset();
        clearActiveBtn();
        showLess(event);

    } catch (error) {
        console.error(error.message);
    }
}