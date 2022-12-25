function searchForNumber(mainArray,commands) {
    let getElementFromMainArray = commands[0];
    let numberToDeleteElement = commands[1];
    let searchingNumber = commands[2];
    let newArray = mainArray.slice(0,getElementFromMainArray);
    newArray.splice(0,numberToDeleteElement);
    let countNumber = 0;
    for (let el of newArray) {
        if (el === searchingNumber) {
            countNumber++;
        }
    }
    console.log(`Number ${searchingNumber} occurs ${countNumber} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);