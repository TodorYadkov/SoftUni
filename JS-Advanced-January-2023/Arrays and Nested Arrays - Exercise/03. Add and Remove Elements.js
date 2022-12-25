function addRemoveEl(arrCommands) {
    let resultArr = [];
    let number = 1;
    for (let command of arrCommands) {
        switch (command) {
            case 'add':
                resultArr.push(number++);
                break;
            case 'remove':
                resultArr.pop()
                number++;
                break;
        }
    }

    console.log(resultArr.length > 0 ? `${resultArr.join('\n')}` : 'Empty');
}

addRemoveEl(['add', 'add', 'add', 'add']);
addRemoveEl(['add', 'add', 'remove', 'add', 'add']);
addRemoveEl(['remove', 'remove', 'remove']);