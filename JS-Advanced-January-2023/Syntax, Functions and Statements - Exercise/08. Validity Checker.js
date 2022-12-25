function validityChecker(x1, y1, x2, y2) {
    let distanceXToY = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let distanceX1Y1To0 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    let distanceX2Y2To0 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));

    let resultX1Y1To0 = ``;
    let resultX2Y2To0 = ``;
    let resultXToY = ``;
    if (Number.isInteger(distanceX1Y1To0)) {
        resultX1Y1To0 = `{${x1}, ${y1}} to {0, 0} is valid`;
    } else {
        resultX1Y1To0 = `{${x1}, ${y1}} to {0, 0} is invalid`;
    }

    if (Number.isInteger(distanceX2Y2To0)) {
        resultX2Y2To0 = `{${x2}, ${y2}} to {0, 0} is valid`;
    } else {
        resultX2Y2To0 = `{${x2}, ${y2}} to {0, 0} is invalid`;
    }

    if (Number.isInteger(distanceXToY)) {
        resultXToY = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    } else {
        resultXToY = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }

    console.log(`${resultX1Y1To0}\n${resultX2Y2To0}\n${resultXToY}`);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
validityChecker(3.3, 0, 0, 4);
