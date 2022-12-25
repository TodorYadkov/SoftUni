function treassureHunt(input) {
    const command = input.slice();
    let treassureChest = command.shift().split('|');

    while (command[0] !== 'Yohoho!') {
        let info = command.shift().split(' ');
        let currentCommand = info.shift();
        let index = 0;
        let count = 0;

        switch (currentCommand) {
            case 'Loot':
                info.forEach(el => {
                    if (treassureChest.includes(el) === false) {
                        treassureChest.unshift(el);
                    }
                });
                break;
            case 'Drop':
                index = Number(info[0]);
                if (index >= 0 || index < treassureChest.length) {
                    let removedItem = treassureChest.splice(index, 1);
                    removedItem.forEach(el => treassureChest.push(el));
                }
                break;
            case 'Steal':
                count = Number(info[0]);
                let starIndex = treassureChest.length - count;
                if (starIndex < 0) {
                    starIndex = 0;
                }
                let stollenItems = treassureChest.splice(starIndex, count);
                console.log(stollenItems.join(', '));
                break;
        }
    }

    if (treassureChest.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        let averageGain = 0;
        for (let el of treassureChest) {
            averageGain += el.length;
        }
        averageGain /= treassureChest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

treassureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);

treassureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);