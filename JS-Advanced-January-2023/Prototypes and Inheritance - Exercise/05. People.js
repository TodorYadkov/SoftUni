function solution() {
    class Employee {
        constructor(name, age) {
            if (this.constructor == Employee) {
                throw new Error('Cannot create Abstract class directly');
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            this.tasks.push(currentTask);
            console.log(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on a simple task.`);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}

const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work(); // Ivan is working on a simple task. 
junior.work(); // Ivan is working on a simple task. 

junior.salary = 5811;
junior.collectSalary(); // Ivan received 5811 this month. 

const sinior = new classes.Senior('Alex', 31);

sinior.work(); // Alex is working on a complicated task.
sinior.work(); // Alex is taking time off work.
sinior.work(); // Alex is supervising junior workers. 
sinior.work(); // Alex is working on a complicated task.

sinior.salary = 12050;
sinior.collectSalary(); // Alex received 12050 this month. 

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary(); // Tom received 15000 this month. 
manager.dividend = 2500;
manager.collectSalary(); // Tom received 17500 this month.