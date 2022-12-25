function makeADictionary(JsonInputAsArray) {
    let dictionary = [];
    JsonInputAsArray.forEach(el => {
        let obj = JSON.parse(el); 
        dictionary = Object.assign(dictionary,obj);
    });

    let sortedArray = Object.keys(dictionary);
    sortedArray = sortedArray.sort((a,b) => a.localeCompare(b)).forEach(prop => console.log(`Term: ${prop} => Definition: ${dictionary[prop]}`));
}

makeADictionary(['{"Microphone":"Test"}',
    '{"Microphone":"Test12345"}',
    '{"Microphone":"Test52"}',
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);