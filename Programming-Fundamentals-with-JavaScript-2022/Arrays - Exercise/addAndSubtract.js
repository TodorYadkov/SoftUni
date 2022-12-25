function addAndSubtract(inputArray) {
    let modifedArray = [];
    let sumInputArray = 0;
    let sumModifedArray = 0;
    
    for (let i = 0; i < inputArray.length; i++) {
        let currentNumber = Number(inputArray[i]);
        sumInputArray += currentNumber;
        if (currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        sumModifedArray += currentNumber;
        modifedArray.push(currentNumber);
    }

    console.log(`[ ${modifedArray.join(', ')} ]\n${sumInputArray}\n${sumModifedArray}`);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);