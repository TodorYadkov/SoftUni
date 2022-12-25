function heartDelivery(input) {
    const command = input.slice();
    let neighborList = command.shift().split('@').map(x => Number(x));
    let currentNeighborIndex = 0;

    while (command[0] !== 'Love!') {
        let [currCom, lengthJump] = command.shift().split(' ');
        lengthJump = Number(lengthJump);
        let endOfArr = neighborList.length;
        currentNeighborIndex += lengthJump;

        if (currentNeighborIndex >= endOfArr) {
            currentNeighborIndex = 0;
        }

        if (neighborList[currentNeighborIndex] - 2 === 0) {
            neighborList[currentNeighborIndex] -= 2;
            console.log(`Place ${currentNeighborIndex} has Valentine's day.`);
        } else if (neighborList[currentNeighborIndex] - 2 > 0) {
            neighborList[currentNeighborIndex] -= 2;
        } else if (neighborList[currentNeighborIndex] === 0) {
            console.log(`Place ${currentNeighborIndex} already had Valentine's day.`)
        }
    }

    console.log(`Cupid's last position was ${currentNeighborIndex}.`);
    neighborList = neighborList.filter(x => x !== 0);
    if (neighborList.length === 0) {
        console.log('Mission was successful.')
    } else {
        console.log(`Cupid has failed ${neighborList.length} places.`);
    }
}

heartDelivery(["2@4@2",
    "Jump 0",
    "Jump 1",
    "Jump 1",
    "Jump 1",
    "Jump 1",
    "Love!"]);

// heartDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);


// heartDelivery(["2@4@2",
//     "Jump 2",
//     "Jump 2",
//     "Jump 8",
//     "Jump 3",
//     "Jump 1",
//     "Love!"]);