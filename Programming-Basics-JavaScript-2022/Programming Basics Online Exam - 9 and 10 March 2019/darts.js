function darts(input) {
    let index = 0;
    let namePlayer = input[index];
    index++;
    let command = input[index];
    let allPonit = 301;
    let countAccurateShot = 0;
    let countInaccurateShot = 0;
    while (command !== "Retire") {
        index++;
        let sector = command;
        command = input[index];
        index++;
        let points = Number(command);
        switch (sector) {
            case "Single":
                points *= 1;
                break;
            case "Double":
                points *= 2;
                break;
            case "Triple":
                points *= 3;
                break;
        }
        if (allPonit - points > 0) {
            allPonit -= points;
            countAccurateShot++;
        } else if (allPonit - points === 0) {
            allPonit -= points;
            countAccurateShot++;
            console.log(`${namePlayer} won the leg with ${countAccurateShot} shots.`);
            break;
        } else {
            countInaccurateShot++;
        }
        command = input[index];
        if (command === "Retire") {
            console.log(`${namePlayer} retired after ${countInaccurateShot} unsuccessful shots.`);
            break;
        }
    }
}
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])