function serializeString(input) {
    // create Map
    let obj = new Map();
    let first = input[0].split('');
    let second = input[0].split('');
    // check to identique values
    for (let i = 0; i < first.length; i++) {
        // check if key has been created and create Set to collect only unique value
        if (!obj.has(first[i])) {
            obj.set(first[i], new Set());
        }
        // add the index in Set
        for (let j = i; j < first.length; j++) {
            if (first[i] === first[j]) {
                obj.get(first[i]).add(j);
            }
        }
    }
    // print final result
    // create new array to print uniqe element from set
    for (let prop of obj) {
        let result = [];
        obj.get(prop[0]).forEach(el => result.push(el));
        console.log(`${prop[0]}:${result.join('/')}`);
    }
}
// serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);