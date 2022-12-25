function allTheLuggage(inputArr) {
    const listLuggage = {};
    let sortType = '';

    for (let line of inputArr) {
        if (line === 'strict' || line === 'luggage name' || line === 'weight') {
            sortType = line;
            break;
        }
        
        let matchText = line.split(/\.*\*\.*/g);
        let [ownerName, luggageName, isFood, isDrink, isFragile, weightKg, transferredWith] = matchText;
        isFood = isFood === 'true';
        isDrink = isDrink === 'true';
        isFragile = isFragile === 'true';
        weightKg = Number(weightKg);

        let typeLuggage;
        isFood ? typeLuggage = 'food' : isDrink ? typeLuggage = 'drink' : typeLuggage = 'other';

        if (listLuggage[ownerName] === undefined) {
            listLuggage[ownerName] = {};
        }

        listLuggage[ownerName][luggageName] = {
            kg: weightKg,
            fragile: isFragile,
            type: typeLuggage,
            transferredWith: transferredWith,
        };
    }

    const sortedObj = {};
    if (sortType === 'strict') {

        console.log(JSON.stringify(listLuggage));

    } else if (sortType === 'luggage name') {

        Object.keys(listLuggage).forEach(key => {
            sortedObj[key] = {};
            let sortedInnerKeys = Object.keys(listLuggage[key]).sort();

            sortedInnerKeys.forEach((innerkey) => {
                sortedObj[key][innerkey] = listLuggage[key][innerkey];
            });
        });

        console.log(JSON.stringify(sortedObj));

    } else if (sortType === 'weight') {

        Object.keys(listLuggage).forEach(key => {
            sortedObj[key] = {};

            let sortedWeightASC = Object.keys(listLuggage[key]).sort((a, b) => listLuggage[key][a].kg - listLuggage[key][b].kg);

            sortedWeightASC.forEach(value => {
                sortedObj[key][value] = listLuggage[key][value];
            });
        });

        console.log(JSON.stringify(sortedObj));
    }
}

allTheLuggage([
    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'strict',
    '']);