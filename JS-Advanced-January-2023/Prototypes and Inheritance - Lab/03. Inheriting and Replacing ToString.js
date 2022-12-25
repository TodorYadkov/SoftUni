function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }

    }

    return {
        Person,
        Teacher,
        Student
    };
}

const { Person } = toStringExtension();
const person = new Person('Maria', 'maria@yahoo.bg');
const { Teacher } = toStringExtension();
const teacher = new Teacher('Ivan', 'ivan@ivan.bg', 'history');
const { Student } = toStringExtension();
const student = new Student('Pesho', 'pesho@gmail.com', 'Math');
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());

console.log(Object.getPrototypeOf(teacher) === Teacher.prototype);
console.log(Teacher.prototype.toString);
Person.prototype.age = 21;
console.log(teacher.age);
console.log(person.age);
console.log(student.age);