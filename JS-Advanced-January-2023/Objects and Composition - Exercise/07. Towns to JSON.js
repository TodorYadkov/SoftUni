function townsToJSON(inputArr) {
    const resultArr = [];
    let [town, latitude, longitude] = inputArr
        .shift()
        .split('|')
        .map(el => el.trim())
        .filter(el => el !== '');

    for (let el of inputArr) {
        const tableObj = {};
        let [city, currLatitude, currLongitude] = el.split('|').map(el => el.trim()).filter(el => el !== '');
        tableObj[town] = city;
        tableObj[latitude] = Number(Number(currLatitude).toFixed(2));
        tableObj[longitude] = Number(Number(currLongitude).toFixed(2));

        resultArr.push(tableObj);
    }

    console.log(JSON.stringify(resultArr));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);