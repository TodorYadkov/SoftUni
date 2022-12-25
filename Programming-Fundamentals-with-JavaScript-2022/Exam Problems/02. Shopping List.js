function shoppingList(input) {
    const listShopiping = [...input];
    let initialList = listShopiping.shift().split('!');

    while (listShopiping[0] !== 'Go Shopping!') {
        let [currCommand, item, newItem] = listShopiping.shift().split(' ');

        switch (currCommand) {
            case 'Urgent':
                if (initialList.includes(item) === false) {
                    initialList.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (initialList.includes(item)) {
                    let indexOfItem = initialList.indexOf(item);
                    initialList.splice(indexOfItem, 1);
                }
                break;
            case 'Correct':
                if (initialList.includes(item)) {
                    let indexOfItem = initialList.indexOf(item);
                    initialList.splice(indexOfItem, 1, newItem);
                }
                break;
            case 'Rearrange':
                if (initialList.includes(item)) {
                    let indexOfItem = initialList.indexOf(item);
                    let elements = initialList.splice(indexOfItem, 1);
                    initialList.push(elements);
                }
                break;
        }
    }

    initialList = initialList.filter((item, i, ar) => ar.indexOf(item) === i);
    console.log(initialList.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
