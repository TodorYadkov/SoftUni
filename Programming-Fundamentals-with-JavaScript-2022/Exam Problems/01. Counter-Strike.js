function counterStrike(input) {
    const workArr = [...input];
    let ownEnergy = Number(workArr.shift());
    let countWin = 0;
    let isWinner = true;
    while (workArr[0] !== 'End of battle') {
        let currentBattleEnergy = Number(workArr.shift());
        
        if (ownEnergy - currentBattleEnergy >= 0) {
            countWin++;
            ownEnergy -= currentBattleEnergy;
        } else {
            console.log(`Not enough energy! Game ends with ${countWin} won battles and ${ownEnergy} energy`);
            isWinner = false;
            break;
        }
        if (countWin % 3 === 0) {
            ownEnergy += countWin;
        }
    }

    if (isWinner) {
        console.log(`Won battles: ${countWin}. Energy left: ${ownEnergy}`);
    }
}

// counterStrike(["100",
//     "10",
//     "10",
//     "10",
//     "1",
//     "2",
//     "3",
//     "73",
//     "10"]);

// counterStrike(["200",
//     "54",
//     "14",
//     "28",
//     "13",
//     "End of battle"]);

counterStrike(["100",
    "100",
    "14",
    "28",
    "13",
    "End of battle"]);