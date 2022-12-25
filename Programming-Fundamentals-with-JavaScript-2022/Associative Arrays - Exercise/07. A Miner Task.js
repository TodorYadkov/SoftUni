function minerTask(input) {
    let resourcesList = new Map();

    for (let i = 0; i < input.length; i++) {
        let resource = input[i++];
        let qty = Number(input[i]);
        
        if (!resourcesList.has(resource)) {
            resourcesList.set(resource,0);
        }
        
        qty += resourcesList.get(resource);
        resourcesList.set(resource,qty);
    }
    for (let el of resourcesList) {
        console.log(el[0], '->', el[1]);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
console.log('-----------------------')
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);