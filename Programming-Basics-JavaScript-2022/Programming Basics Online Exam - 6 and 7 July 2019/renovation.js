function renovation(input) {
    let index = 0;
    let heightWall = Number(input[index]);
    index++;
    let widthWall = Number(input[index]);
    index++;
    let percentNotPaint = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalArea = (heightWall * widthWall) * 4;
    totalArea = Math.ceil(totalArea - (totalArea * (percentNotPaint / 100)));

    while (command !== "Tired!") {
        command = Number(command);
        totalArea -= command;
        if (totalArea <= 0) {
            break;
        }
        command = input[index];
        index++;
    }
    if (totalArea === 0) {
        console.log("All walls are painted! Great job, Pesho!");
    } else if (command === "Tired!") {
        console.log(`${totalArea} quadratic m left.`);
    } else {
        console.log(`All walls are painted and you have ${Math.abs(totalArea)} l paint left!`);
    }

}
renovation(["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"])