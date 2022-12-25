function inventory(input) {
    const workArr = input.slice();
    let itemsList = workArr.shift().split(', ');

    while (workArr[0] !== 'Craft!') {
        let tokens = workArr.shift().split(' - ');
        let command = tokens[0];
        let item = tokens[1];
        switch (command) {
            case 'Collect':
                if (itemsList.includes(item) === false) {
                    itemsList.push(item);
                }
                break;
            case 'Drop':
                if (itemsList.includes(item)) {
                    let indexOfItem = itemsList.indexOf(item);
                    itemsList.splice(indexOfItem, 1);
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');
                if (itemsList.includes(oldItem)) {
                    indexOfItem = itemsList.indexOf(oldItem) + 1;
                    itemsList.splice(indexOfItem, 0, newItem);
                }
                break;
            case 'Renew':
                if (itemsList.includes(item)) {
                    let changePositionItem = '';
                    indexOfItem = itemsList.indexOf(item);
                    changePositionItem = itemsList.splice(indexOfItem, 1);
                    itemsList.push(changePositionItem);
                }
                break;
        }
    }

    console.log(itemsList.join(', '));
}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!']);

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);