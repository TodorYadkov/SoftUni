function grandpaStavri(input) {
    let index = 0;
    let numDay = Number(input[index]);
    index++;
    let allLitersBrandy = 0;
    let allDegrees = 0;
    let averageDegrees = 0;
    for (let i = 1; i <= numDay; i++) {
        let lierBrandy = Number(input[index]);
        index++;
        let degreesBrandy = Number(input[index]);
        index++;
        allLitersBrandy += lierBrandy;
        let tempDegrees = lierBrandy * degreesBrandy;
        allDegrees += tempDegrees;
    }
    averageDegrees = allDegrees / allLitersBrandy;
    console.log(`Liter: ${allLitersBrandy.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);
    if (averageDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (averageDegrees >= 38 && averageDegrees < 42) {
        console.log("Super!");
    } else if (averageDegrees >= 42) {
        console.log("Dilution with distilled water!");
    }
}
grandpaStavri(["3","100","45","50","55","150","36"])