function circleArea(input) {
    if (typeof input !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    } else {
        console.log(((Math.pow(Number(input), 2)) * Math.PI).toFixed(2));
    }
}

circleArea(5);
circleArea('dd');