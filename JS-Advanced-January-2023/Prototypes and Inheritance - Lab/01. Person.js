function createPerson(firstName, lastName) {
    const person = {
        firstName,
        lastName,
    };

    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(newName) {
            const [first, last] = newName.split(' ');
            if (first && last) {
                this.firstName = first;
                this.lastName = last;
            };
        },
    });

    return person;
}


let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla

let person1 = createPerson("Albert", "Simpson");
console.log(person1.fullName); //Albert Simpson
person1.firstName = "Simon";
console.log(person1.fullName); //Simon Simpson
person1.fullName = "Peter";
console.log(person1.firstName);  // Simon
console.log(person1.lastName);  // Simpson
