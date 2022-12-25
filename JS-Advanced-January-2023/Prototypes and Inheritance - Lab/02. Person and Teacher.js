function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        };
    };

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        };
    };

    return {
        Person,
        Teacher
    }
}

const { Person } = personAndTeacher();
const { Teacher } = personAndTeacher();
const newPerson = new Person('Ivan Ivanov', 'ivan@yahoo.com');
const newTeacher = new Teacher('Gospodin Gospodinov', 'gospodinov@yahoo.com,', 'Informatics');
console.log(newPerson);

console.log('----------Next----Line----------');
// Initial state of the object
console.log(newTeacher);

console.log('----------Next----Line----------');
// Make configurable to false - the type of this property cannot be changed but if writable: true, the value can be changed
Object.defineProperty(newTeacher, 'subject', {
    configurable: false,
});

try {
    Object.defineProperties(newTeacher, {
        'subject': {
            enumerable: false,
        }
    },);
} catch (err) {
    console.log(err);
};

console.log('----------Next----Line----------');
// Change the value of the property
newTeacher.subject = 'Computer sinces';
console.log(newTeacher);

console.log('----------Next----Line----------');
Object.defineProperty(newTeacher, 'subject', {
    writable: false,
});
// Cannot change the value of the property when the writable is false
newTeacher.subject = 'Informatics';
console.log(newTeacher);
