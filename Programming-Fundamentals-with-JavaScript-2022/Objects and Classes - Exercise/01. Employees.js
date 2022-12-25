    function employee(arr) {
        let employee = {};
        for (let el of arr) {
            employee.name = el;
            employee.personalNumber = Number(el.length);
            console.log(`Name: ${ employee.name} -- Personal Number: ${employee.personalNumber}`);
        }
    }
    employee([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal']);
    employee([
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland']);