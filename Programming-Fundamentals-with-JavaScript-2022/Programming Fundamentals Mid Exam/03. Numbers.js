function numbers(input) {
    let arr = input.split(' ').map(Number);
    let averageNumber = 0;
    for (let el of arr) {
        averageNumber += el;
    }
    averageNumber = averageNumber / arr.length;
    let newArr = arr.filter(x => x > averageNumber).sort((a, b) => b - a);
    

    if (newArr.length === 0) {
        console.log('No');
    } else {
        newArr.length > 5 ? newArr.splice(5) : newArr;
        console.log(newArr.join(' '));
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1 1 1 1 1 1 1 1 1 1 1 1 1111 1 1 1 1 1 1 1 1');
numbers('-1 -2 -3 -4 -5 -6');
numbers('1');