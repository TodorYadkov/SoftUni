window.addEventListener('load', solve);

function solve() {
    document.getElementById('add-btn').addEventListener('click', addSongFn);
    const section = {
        collection: document.querySelector('#all-hits .all-hits-container'),
        savedSongs: document.querySelector('#saved-hits .saved-container'),
        totalLikes: document.querySelector('#total-likes .likes p'),
    };

    function addSongFn(event) {
        event.preventDefault();

        const inputs = {
            genre: document.getElementById('genre'),
            name: document.getElementById('name'),
            author: document.getElementById('author'),
            date: document.getElementById('date'),
        };
        const genre = inputs.genre.value;
        const name = inputs.name.value;
        const author = inputs.author.value;
        const date = inputs.date.value;

        if (genre === '' ||
            name === '' ||
            author === '' ||
            date === '') {
            return;
        }

        const divHit = generateEl('div', '', section.collection, { class: 'hits-info' });
        const img = generateEl('img', '', divHit, { src: './static/img/img.png' });
        const h2G = generateEl('h2', `Genre: ${genre}`, divHit);
        const h2N = generateEl('h2', `Name: ${name}`, divHit);
        const h2A = generateEl('h2', `Author: ${author}`, divHit);
        const h3D = generateEl('h3', `Date: ${date}`, divHit);
        const btnSave = generateEl('button', 'Save song', divHit, { class: 'save-btn' });
        const btnLike = generateEl('button', 'Like song', divHit, { class: 'like-btn' });
        const btnDelete = generateEl('button', 'Delete', divHit, { class: 'delete-btn' });
        btnSave.addEventListener('click', saveFn);
        btnLike.addEventListener('click', likeFn);
        btnDelete.addEventListener('click', deleteFn);

        // Clear all inputs fileds
        for (let field in inputs) {
            inputs[field].value = '';
        }

        function likeFn() {
            btnLike.disabled = true;
            const likeNum = Number(section.totalLikes.textContent.split('Total Likes: ')[1]);
            section.totalLikes.textContent = `Total Likes: ${likeNum + 1}`;
        }

        function saveFn() {
            divHit.removeChild(btnSave);
            divHit.removeChild(btnLike);
            section.savedSongs.appendChild(divHit);
        }

        function deleteFn() {
            divHit.remove();
        }
    }

    function generateEl(typeEl, content, parent, attribute) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attribute) {
            for (let att in attribute) {
                el.setAttribute(att, attribute[att]);
            }
        }

        parent.appendChild(el);
        return el;
    }
}