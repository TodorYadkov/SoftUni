function santaNewList(inputArr) {
    const childrensList = {};
    const presentsList = {};

    while (inputArr[0] !== 'END') {
        let tokens = inputArr.shift().split('->');

        if (tokens[0] !== 'Remove') {
            let [name, present, qty] = tokens;

            if (childrensList[name] === undefined) {
                childrensList[name] = 0;
            }

            if (presentsList[present] === undefined) {
                presentsList[present] = 0;
            }

            childrensList[name] += Number(qty);
            presentsList[present] += Number(qty);
        } else {

            delete childrensList[tokens[1]];
        }
    }

    let sortedChildrens = Object.entries(childrensList).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    console.log('Children:');
    for (let child of sortedChildrens) {
        console.log(`${child[0]} -> ${child[1]}`);
    }

    console.log('Presents:');
    for (let present in presentsList) {
        console.log(`${present} -> ${presentsList[present]}`);
    }
}

santaNewList([
    'Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END']);

// santaNewList([
//     'Marty->Toys->5',
//     'Sam->Candy->20',
//     'Leo->Candy->10',
//     'Leo->Toys->1',
//     'Katy->Clothes->4',
//     'Bobbie->Clothes->6',
//     'Tanya->Phone->1',
//     'Nasko->Tablet->3',
//     'END']);
// console.log('>>>>>>>--------<<<<<<<<')
