class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    };

    get online() {
        return this._online;
    };

    set online(newStatus) {
        this._online = newStatus;
        if (this.divClassTitle) {
            this.divClassTitle.className = this._online ? 'title online' : 'title';
        };
    };

    createEl(el, content, elClass) {
        this.element = document.createElement(el);
        content !== '_' ? this.element.innerHTML = content : null;
        elClass !== '_' ? this.element.className = elClass : null;
        return this.element;
    };

    render(id) {
        this.parentEl = document.querySelector(`#${id}`);
        this.article = this.createEl('article', '_', '_');
        this.divClassTitle = this.createEl('div', `${this.firstName} ${this.lastName}`, "title");
        this.divClassTitle.className = this._online ? 'title online' : 'title';
        
        this.buttonTitle = this.createEl('button', "&#8505", '_');

        this.divClassTitle.appendChild(this.buttonTitle);
        this.article.appendChild(this.divClassTitle);

        this.divClassInfo = this.createEl('div', '_', "info");
        this.divClassInfo.style.display = 'none';

        this.spanPhone = this.createEl('span', `&phone; ${this.phone}`, '_');
        this.spanEmail = this.createEl('span', `&#9993; ${this.email}`, '_');
        this.divClassInfo.appendChild(this.spanPhone);
        this.divClassInfo.appendChild(this.spanEmail);
        this.article.appendChild(this.divClassInfo);
        this.parentEl.appendChild(this.article);

        this.buttonTitle.addEventListener('click', () => {
            this.divClassInfo.style.display === 'none' ?
                this.divClassInfo.style.display = 'block' :
                this.divClassInfo.style.display = 'none';
        });
    };
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 5 second, change the online status to true
setTimeout(() => contacts[1].online = true, 5000);

// After more 5 second, change the online status to false
setTimeout(() => contacts[1].online = false, 10000);