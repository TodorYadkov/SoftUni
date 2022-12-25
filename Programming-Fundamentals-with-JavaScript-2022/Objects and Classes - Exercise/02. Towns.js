function town(array) {
    let obj = {};
    for (let el of array) {
        let newArray = el.split(' | ');
        let town = newArray[0];
        let latitude = Number(newArray[1]).toFixed(2);
        let longitude = Number(newArray[2]).toFixed(2);
        obj.town = town;
        obj.latitude = latitude;
        obj.longitude = longitude;
        console.log(obj);
    }
}
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);

town(['Plovdiv | 136.45 | 812.575']);