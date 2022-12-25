function addAndRemove(command) {
    let newArr = [];
    let countNumber = 0;
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'add') {
            countNumber++;
            newArr.push(countNumber);
        } else if (command[i] === 'remove') {
            countNumber++;
            newArr.pop();
        }
    }
    if (!newArr.length) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);