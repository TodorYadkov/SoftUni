function race(input) {
    const pattern = /\w/g;
    let commands = input.slice();
    // create list of racers
    let listOfRacers = {};
    commands.shift().split(', ').forEach(name => {listOfRacers[name] = 0});
    
    while (commands[0] !== 'end of race') {
        let name = '';
        let distance = 0;
        let info = commands.shift();
        // get name and distance of each racer
        info.match(pattern).forEach(char => {
            isNaN(Number(char)) ? name += char : distance += Number(char);
        });
        // add in list of racers
        if (listOfRacers.hasOwnProperty(name)) {
            listOfRacers[name] += distance;
        }
    }
    // sort and print final result
    let sortedRacersByDistanceDSC = Object.entries(listOfRacers).sort((a,b) => b[1] - a[1]);
    console.log(`1st place: ${sortedRacersByDistanceDSC[0][0]}\n2nd place: ${sortedRacersByDistanceDSC[1][0]}\n3rd place: ${sortedRacersByDistanceDSC[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);
console.log('-----------------------')
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);
