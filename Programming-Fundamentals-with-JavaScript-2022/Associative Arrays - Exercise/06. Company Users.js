function employees(input) {
    let companyList = {};
    for (let el of input) {
        let [companyName, employeeName] = el.split(' -> ');
        if (!companyList.hasOwnProperty(companyName)) {
            companyList[companyName] = [];
        }
        if (!companyList[companyName].includes(employeeName)) {
            companyList[companyName].push(employeeName)
        }
    }
    let sorted = Object.keys(companyList).sort((a,b) => a.localeCompare(b));
    for (let el of sorted) {
        console.log(`${el}`);
        Object.values(companyList[el]).forEach(employee => console.log('--',employee));
    }
}
employees([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);

employees([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);