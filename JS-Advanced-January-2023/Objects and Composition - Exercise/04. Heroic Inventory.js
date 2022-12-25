function heroicInventory(arrInput) {

    const resultArr = [];

    for (let line of arrInput) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        
        resultArr.push({name,level,items});
    }

    console.log(JSON.stringify(resultArr));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);