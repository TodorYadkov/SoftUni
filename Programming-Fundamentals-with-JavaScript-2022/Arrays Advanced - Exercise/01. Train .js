function train(inputArray) {
    let trainWagonWithPassenger = inputArray.shift().split(' ').map(Number);
    let maxCapacityOfWagon = Number(inputArray.shift());
    let [commands, value] = inputArray.shift().split(' ');

    while (inputArray.length >= 0) {
        if (commands === 'Add') {
            value = Number(value);
            trainWagonWithPassenger.push(value);
        } else {
            for (let i = 0; i < trainWagonWithPassenger.length; i++) {
                commands = Number(commands)
                if (trainWagonWithPassenger[i] + commands <= maxCapacityOfWagon) {
                    let temporraryPassenger = trainWagonWithPassenger[i] + commands;
                    trainWagonWithPassenger.splice(i,1,temporraryPassenger);
                    break;
                }
            }
        }
        if (inputArray.length === 0) {
            break;
        }
        [commands, value] = inputArray.shift().split(' ');
    }
    console.log(trainWagonWithPassenger.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);