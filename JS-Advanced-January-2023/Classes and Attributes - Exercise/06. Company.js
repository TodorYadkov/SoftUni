class Company {
    constructor() {
        this.departments = {};
    };

    addEmployee(name, salary, position, department) {
        if (!(name && position && department) || salary <= 0) {
            throw new Error('Invalid input!');
        };

        if (!this.departments[department]) {
            this.departments[department] = {};
        };

        if (!this.departments[department][name]) {
            this.departments[department][name] = { salary: Number(salary), position: position, };
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        };
    };

    bestDepartment() {
        let highestAvgSalaryDepartments = [];
        for (let department in this.departments) {
            let count = 0;
            let tempSum = 0;
            for (let employee in this.departments[department]) {
                tempSum += this.departments[department][employee].salary;
                count++;
            };

            highestAvgSalaryDepartments.push([department, (tempSum / count)]);
        };

        const printLineArr = [];
        highestAvgSalaryDepartments = highestAvgSalaryDepartments.sort((a, b) => b[1] - a[1]).shift();
        printLineArr.push(`Best Department is: ${highestAvgSalaryDepartments[0]}`, `Average salary: ${highestAvgSalaryDepartments[1].toFixed(2)}`);

        const bestDep = highestAvgSalaryDepartments[0];
        const sortedEmployees = Object.entries(this.departments[bestDep]).sort((a, b) => b[1].salary - a[1].salary || a[0].localeCompare(b[0]));
        sortedEmployees.forEach(el => printLineArr.push(`${el[0]} ${el[1].salary} ${el[1].position}`));


        return printLineArr.join('\n');
    };
}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());
