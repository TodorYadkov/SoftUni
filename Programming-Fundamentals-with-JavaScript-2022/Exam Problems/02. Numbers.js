function numbers(input) {
    let numberArr = input.shift().split(' ').map(Number);

    while (input[0] !== 'Finish') {
        let [command, value, replacement] = input.shift().split(' ');
        let tempIndex = 0;
        value = Number(value);
        replacement = Number(replacement);

        switch (command) {
            case 'Add':
                numberArr.push(value);
                break;
            case 'Remove':
                tempIndex = numberArr.indexOf(value)
                if (tempIndex !== -1) {
                    numberArr.splice(tempIndex, 1);
                }
                break;
            case 'Replace':
                tempIndex = numberArr.indexOf(value)
                if (tempIndex !== -1) {
                    numberArr.splice(tempIndex, 1, replacement);
                }
                break;
            case 'Collapse':
                numberArr = numberArr.filter(x => x >= value);
                break;
        }
    }

    console.log(numberArr.join(' '))
}

numbers(['1 4 5 19', 'Add 1', 'Remove 4', 'Finish']);
numbers(['1 20 -1 10', 'Collapse 8', 'Finish']);
numbers(['5 9 70 -56 9 9', 'Replace 9 10', 'Remove 9', 'Finish']);