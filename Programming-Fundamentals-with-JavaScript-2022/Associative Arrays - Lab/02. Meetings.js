function meetings(inputArrays) {
    inputArrays = inputArrays.map(el => el.split(' '));
    let meetingObj = new Map();

    for (let [day,name] of inputArrays) {
        if (meetingObj.has(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        meetingObj.set(day, name);
        console.log(`Scheduled for ${day}`);
    }
    for (let prop of meetingObj) {
        console.log(`${prop[0]} -> ${prop[1]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);