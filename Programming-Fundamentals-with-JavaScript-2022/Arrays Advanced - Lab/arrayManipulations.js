function arrayManipulations(commands) {
    let array = commands
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < commands.length; i++) {
        let [currCommand, currentNumber, currentIndex] = commands[i].split(' ');
        currentNumber = Number(currentNumber);
        currentIndex = Number(currentIndex);
        switch (currCommand) {
            case 'Add': add(currentNumber); break;
            case 'Remove': remove(currentNumber); break;
            case 'RemoveAt': removeAt(currentNumber); break;
            case 'Insert': insert(currentNumber,currentIndex); break;
        }
    }

    console.log(array.join(' '));

    function add(number) {
        return array.push(number);
    }

    function remove(number) {
        array = array.filter(el => el !== number);
        return array;
    }

    function removeAt(index) {
        return array.splice(index,1);
    }

    function insert(value, index) {
        return array.splice(index,0,value);
    }
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);
