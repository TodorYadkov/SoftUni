function piccolo(input) {
    let parkingList = new Map();

    input
    .map(el => el.split(', '))
    .forEach(el => {
        if (el[0] === 'IN') {
            parkingList.set(el[1],el[0])
        } else if (el[0] === 'OUT') {
            parkingList.delete(el[1]);
        }
    });

    let sorted = Array.from(parkingList).sort((a,b) => a[0].localeCompare(b[0]));
    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');
    }
    for (let el of sorted) {
        console.log(el[0]);
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);