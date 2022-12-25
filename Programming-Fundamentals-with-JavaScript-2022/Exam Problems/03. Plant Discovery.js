function plantDiscovery(input) {
    const commands = [...input];
    const numberPlants = Number(commands.shift());
    let exhibitionList = {};
    let plantsArr = commands
        .splice(0, numberPlants)
        .map(el => el.split('<->'))
        .forEach(data => {
            if (!exhibitionList.hasOwnProperty(data[0])) {
                exhibitionList[data[0]] = { rarity: Number(data[1]), rating: [] };
            }
        });

    while (commands[0] !== 'Exhibition') {
        let currCommand = commands.shift().split(': ');
        switch (currCommand[0]) {
            case 'Rate':
                exhibitionList = rate(currCommand[1]);
                break;
            case 'Update':
                exhibitionList = update(currCommand[1]);
                break;
            case 'Reset':
                exhibitionList = reset(currCommand[1]);
                break;
        }
    }

    console.log('Plants for the exhibition:');
    for (let prop in exhibitionList) {
        let avgRating = exhibitionList[prop].rating.reduce((accumulator, currValue) => accumulator + currValue, 0);
        let numberOfRating = exhibitionList[prop].rating.length;
        if (numberOfRating === 0) {
            avgRating = 0;
        } else {
            avgRating = avgRating / numberOfRating;
        }
        console.log(`- ${prop}; Rarity: ${exhibitionList[prop].rarity}; Rating: ${avgRating.toFixed(2)}`);
    }


    function rate(string) {
        let [plant, rating] = string.split(' - ');
        if (exhibitionList.hasOwnProperty(plant)) {
            exhibitionList[plant].rating.push(Number(rating));
        } else {
            console.log('error');
        }
        return exhibitionList;
    }

    function update(string) {
        let [plant, rarity] = string.split(' - ');
        if (exhibitionList.hasOwnProperty(plant)) {
            exhibitionList[plant].rarity = Number(rarity);
        } else {
            console.log('error');
        }
        return exhibitionList;
    }

    function reset(string) {
        if (exhibitionList.hasOwnProperty(string)) {
            exhibitionList[string].rating = [];
        } else {
            console.log('error');
        }
        return exhibitionList;
    }
}

// plantDiscovery(["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"]);

plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]);