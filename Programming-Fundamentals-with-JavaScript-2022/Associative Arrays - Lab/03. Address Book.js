function addressBook(inputArray) {
    let addressBookObj = new Map();
    inputArray = inputArray
        .map(el => el.split(':')).sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(el => {
            let [name, address] = el;
            addressBookObj.set(name,address);
        });

    for (let el of addressBookObj) {
        console.log(el[0], '->', el[1]);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);