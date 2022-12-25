function shootForTheWin(input) {
    const workArr = input.slice();
    const target = workArr.shift().split(' ').map(x => Number(x));
    let countShots = 0;

    while (workArr[0] !== 'End') {
        let indexCurrentShot = Number(workArr.shift());
        let currentValueShot = 0;

        if (indexCurrentShot >= 0 && indexCurrentShot < target.length) {
            if (target[indexCurrentShot] !== -1) {
                countShots++;
                currentValueShot = target[indexCurrentShot];
                target[indexCurrentShot] = -1;
            }
        }

        for (let i = 0; i < target.length; i++) {
            if (target[i] !== -1) {
                if (target[i] > currentValueShot) {
                    target[i] -= currentValueShot;
                } else if (target[i] <= currentValueShot) {
                    target[i] += currentValueShot;
                }
            }
        }
    }

    console.log(`Shot targets: ${countShots} -> ${target.join(' ')}`);
}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);