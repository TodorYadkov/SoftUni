function theLift(input) {
    const maxCapacity = 4;
    let workArr = input.slice();
    let peopleInAQueue = Number(workArr.shift());
    let wagonNumber = workArr[0].split(' ').map(x => Number(x));
    let usedSeats = wagonNumber.reduce((currentNum, nextNum) => Number(currentNum) + Number(nextNum), 0);
    let countWagon = wagonNumber.length;
    let result = (peopleInAQueue + usedSeats) / countWagon <= 4;
    if (result) {
        for (let i = 0; i < wagonNumber.length; i++) {
            if (wagonNumber[i] < maxCapacity) {
                let freeSeats = maxCapacity - wagonNumber[i];
                let boardingPeople = 0;
                while (freeSeats > 0) {
                    boardingPeople++;
                    freeSeats--;
                    peopleInAQueue--;
                    if (peopleInAQueue <= 0) {
                        break;
                    }
                }
                wagonNumber.splice(i, 1, boardingPeople + wagonNumber[i]);
            }
            let checkIsFull = wagonNumber.reduce((currentNum, nextNum) => Number(currentNum) + Number(nextNum), 0);
            if (peopleInAQueue <= 0 && wagonNumber.length * maxCapacity === checkIsFull) {
                break;
            } else if (peopleInAQueue <= 0) {
                console.log(`The lift has empty spots!`)
                break;
            }
        }
    } else {
        peopleInAQueue = peopleInAQueue - ((wagonNumber.length * maxCapacity) - usedSeats);
        for (let i = 0; i < wagonNumber.length; i++) {
            wagonNumber.splice(i, 1, maxCapacity);
        }
        console.log(`There isn't enough space! ${peopleInAQueue} people in a queue!`)
    }
    console.log(wagonNumber.join(' '));
}

// theLift(["15", "0 0 0 0 0"]);
// theLift(["20", "0 2 0 0 0 0 0 0 0 0"]);
// theLift(["20", "0 2 0"]);
theLift(["20", "0 0 0 0 0"]);
theLift(["15", "0 0 0 0"]);
