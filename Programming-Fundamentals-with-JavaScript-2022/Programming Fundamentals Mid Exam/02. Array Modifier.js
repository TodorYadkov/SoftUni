function arrayModifier(arr) {
    let workArray = arr.shift().split(' ').map(Number);
    let index = 0;
    let currentCommand = arr[index++].split(' ');

    while (currentCommand !== 'end') {
        switch (currentCommand[0]) {
            case 'swap':
                swap(workArray, Number(currentCommand[1]), Number(currentCommand[2]));
                break;
            case 'multiply': 
            multiply(workArray, Number(currentCommand[1]), Number(currentCommand[2]));
            break;
            case 'decrease':
                workArray = workArray.map(x => x - 1);
            break;
        }

        currentCommand = arr[index++];
        if (currentCommand !== 'end') {
           currentCommand = currentCommand.split(' ');
        }
    }
    console.log(workArray.join(', '))

    function swap(arr, index1, index2) {
        let el1 = arr[index1];
        arr.splice(index1, 1, arr[index2])
        return arr.splice(index2, 1, el1);
    }

    function multiply(arr, index1, index2) {
        let result = arr[index1] * arr[index2];
        return arr.splice(index1,1,result);
    }

}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end']);
