function partyTime(inputData) {
    let guestList = { 'vip': [], 'guest': [], };

    let currGuest = inputData.shift();
    while (currGuest !== 'PARTY') {
        if (!isNaN(currGuest[0])) {
            guestList.vip.push(currGuest);
        } else {
            guestList.guest.push(currGuest);
        }
        currGuest = inputData.shift();
    }
    while (inputData.length > 0) {
        currGuest = inputData.shift();
    
        if ((!isNaN(currGuest[0])) && (Object.values(guestList.vip).includes(currGuest))) {
           let arrivedGuest = Object.values(guestList.vip).indexOf(currGuest);
           guestList.vip.splice(arrivedGuest,1);
        } else {
            let arrivedGuest = Object.values(guestList.guest).indexOf(currGuest);
            guestList.guest.splice(arrivedGuest,1);
        }
    }
    console.log(Object.values(guestList.vip).length + Object.values(guestList.guest).length);
    for (let el of Object.values(guestList.vip)) {
        console.log(el);
    }
    for (let el of Object.values(guestList.guest)) {
        console.log(el);
    }
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);

partyTime(['7IK9Yo0h',
    '9NoBUajQ', '9NoBUajQ', '9NoBUajQ', '9NoBUajQ', '9NoBUajQ', '9NoBUajQ', '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc', 'SVQXQCbc', 'SVQXQCbc', 'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']);