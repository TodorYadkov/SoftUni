function solve() {
    document.querySelector('#container button').addEventListener('click', addMovie);
    document.querySelector('#archive button').addEventListener('click', clearFn);
    const moviesSection = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul');

    // function to add movies on Screen
    function addMovie(event) {
        event.preventDefault();
        // get user input
        const input = Array.from(document.querySelectorAll('#container input'));
        const movie = {
            movieName: null,
            hall: null,
            price: null,
            fillInputs([m, h, p]) {
                this.movieName = m.value !== '' ? m.value : null;
                this.hall = h.value !== '' ? h.value : null;
                this.price = p.value !== '' ? !isNaN(p.value) ? Number(p.value).toFixed(2) : null : null;
            },
        };
        // fill user input
        movie.fillInputs(input);
        // clear input field
        input.forEach(el => el.value = '');
        // check that the field is not empty and make the item
        if (movie.movieName !== null && movie.hall !== null && movie.price !== null && movie.price >= 0) {
            const li = document.createElement('li');
            li.appendChild(createEl('span', movie.movieName));
            li.appendChild(createEl('strong', `Hall: ${movie.hall}`));

            const div = document.createElement('div');
            div.appendChild(createEl('strong', movie.price));

            const inputPlaceholder = document.createElement('input');
            inputPlaceholder.setAttribute('placeholder', 'Ticket Sold');
            div.appendChild(inputPlaceholder);

            const btnArch = createEl('button', 'Archive');
            btnArch.addEventListener('click', archiveFn);
            div.appendChild(btnArch);

            li.appendChild(div);
            moviesSection.appendChild(li);
        }
    }
    // function to move from screen tab to archive
    function archiveFn(event) {
        const li = event.target.parentElement.parentElement;
        const liStrong = event.target.parentElement.parentElement.querySelector('strong');
        const divToDelete = event.target.parentElement;
        const priceTicket = Number(event.target.parentElement.querySelector('strong').textContent);
        const numberTicketsSold = event.target.parentElement.querySelector('input').value === '' ? -1 : Number(event.target.parentElement.querySelector('input').value);

        const btnDelete = createEl('button', 'Delete');
        btnDelete.addEventListener('click', onDelete);

        if (numberTicketsSold >= 0) {
            const totalScore = numberTicketsSold * priceTicket;
            liStrong.textContent = `Total amount: ${totalScore.toFixed(2)}`;

            divToDelete.remove();
            li.appendChild(btnDelete);
            archiveSection.appendChild(li);
        }
    }
    // delete the selected movie
    function onDelete(event) {
        event.target.parentElement.remove();
    }
    // delete all the movie in section archive
    function clearFn() {
        const elementInSection = Array.from(document.querySelector('#archive ul').children);
        elementInSection.forEach(el => el.remove());
    }
    // function to create needed element;
    function createEl(typeEl, content) {
        let element = document.createElement(typeEl);
        element.textContent = content;
        return element;
    }
}