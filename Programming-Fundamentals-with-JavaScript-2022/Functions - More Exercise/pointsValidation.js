function pointsValidation(arrayPoint) {
    let x1 = arrayPoint[0];
    let y1 = arrayPoint[1];
    let x2 = arrayPoint[2];
    let y2 = arrayPoint[3];

    console.log(`${firstComparison(x1,y1) ? `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`}`);
    console.log(`${secondComparison(x2,y2) ? `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`}`);
    console.log(`${thirdComparison(x1,y1,x2,y2) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`}`);

    function firstComparison(x1,y1) {
        let isIntegerValue = Number.isInteger(Math.sqrt((Math.pow((0 - x1),2)) + (Math.pow((0 - y1),2)))); 
        return isIntegerValue;
    }

    function secondComparison(x2,y2) {
        let isIntegerValue = Number.isInteger(Math.sqrt((Math.pow((x2 - 0),2)) + (Math.pow((y2 - 0),2))));
        return isIntegerValue;
    }

    function thirdComparison(x1,y1,x2,y2) {
        let isIntegerValue = Number.isInteger(Math.sqrt((Math.pow((x2 - x1),2)) + (Math.pow((y2 - y1),2))));
        return isIntegerValue;
    }
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);