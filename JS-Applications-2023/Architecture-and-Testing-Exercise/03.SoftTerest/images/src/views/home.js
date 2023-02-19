let ctx = null;

const section = document.getElementById('home');
section.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    ctx.goTo('/catalog');
});

export function showHome(context) {
    ctx = context;
    ctx.showSection(section);
}