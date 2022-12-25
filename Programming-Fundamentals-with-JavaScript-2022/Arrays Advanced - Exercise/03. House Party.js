function houseParty(list) {
    let partyList = [];
    while (list.length > 0) {
        let name = list
            .shift()
            .split(' ');

        if (name.length === 3) {
            if (partyList.includes(name[0])) {
                console.log(`${name[0]} is already in the list!`);
            } else {
                partyList.push(name[0]);
            }
        } else if (name.length === 4) {
            if (!partyList.includes(name[0])) {
                console.log(`${name[0]} is not in the list!`);
            } else {
                let indexForRemove = partyList.indexOf(name[0]);
                if (indexForRemove !== -1) {
                    partyList.splice(indexForRemove, 1);
                }
            }
        }
    }
    console.log(partyList.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);