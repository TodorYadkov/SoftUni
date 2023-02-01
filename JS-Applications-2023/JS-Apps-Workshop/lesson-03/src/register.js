import { clearActiveBtn, sections, navBtns, showLess } from './dom.js';

// Show register page (<article>)
export function showRegister() {
    clearActiveBtn();
    navBtns.registerBtn.classList.add('active');

    const form = sections.registerArticle.getElementsByTagName('form')[0];
    form.addEventListener('submit', (e) => registerFn(e, form));
    sections.main.replaceChildren(sections.registerArticle);
}
// Register
export async function registerFn(event, formHTMLEl) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formHTMLEl));
    if (!formData.email || !formData.password || (formData.password !== formData.rePass)) {
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formData.email.trim(),
                password: formData.password.trim(),
            })
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