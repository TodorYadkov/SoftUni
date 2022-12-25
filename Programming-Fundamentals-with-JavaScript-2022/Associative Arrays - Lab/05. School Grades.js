function studentGrade(array) {
    let schoolList = new Map();
    array
        .map(el => el.split(' '))
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(el => {
            let name = el.shift();
            el = el.map(x => Number(x));
            if (schoolList.has(name)) {
               el.forEach(x => schoolList.get(name).push(x));
            } else {
                schoolList.set(name,el);
            }
        });
    for (let el of schoolList) {
        let avgGrade = 0;
        el[1].forEach(el => avgGrade += el);
        avgGrade /= el[1].length;
        console.log(`${el[0]}: ${avgGrade.toFixed(2)}`);
    }
}

studentGrade(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);

studentGrade(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);    