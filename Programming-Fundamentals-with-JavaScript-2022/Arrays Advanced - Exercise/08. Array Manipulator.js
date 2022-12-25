function arrayManipulator(array, commands) {
    while (commands.length !== 0) {
        let currentCommand = commands.shift().split(' ');
        switch (currentCommand[0]) {
            case 'add':
                array.splice(Number(currentCommand[1]), 0, Number(currentCommand[2]));
                break;
            case 'addMany':
                currentCommand.shift();
                let startIndex = Number(currentCommand.shift());
                let currentElement = '';
                while (currentCommand.length !== 0) {
                    currentElement = Number(currentCommand.shift());
                    array.splice(startIndex++, 0, currentElement);
                }
                break;
            case 'contains':
                console.log(array.indexOf(Number(currentCommand[1])));
                break;
            case 'remove':
                array.splice(Number(currentCommand[1]), 1);
                break;
            case 'shift':
                for (let i = 0; i < Number(currentCommand[1]); i++) {
                    let tempElement = array.shift();
                    array.push(tempElement);
                }
                break;
            case 'sumPairs':
                let tempSum = [];
                if (array.length % 2 !== 0) {
                    array.push(0);
                }
                for (let i = 0; i < array.length - 1; i += 2) {
                    let tempNumber = Number(array[i + 1]);
                    tempSum.push(Number(array[i]) + tempNumber);
                }
                array = tempSum;
                break;
            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulator([1, 2, 4, 5, 6, 7, 8],['sumPairs']);