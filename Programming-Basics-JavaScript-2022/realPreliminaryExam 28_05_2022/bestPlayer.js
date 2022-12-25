function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;
    let goal = Number(input[index]);
    index++;
    let bestPlayer = Number.MIN_SAFE_INTEGER;
    let nameBestPlayer = 0;
    let isHatTrick = false;
    while (command !== "END") {
        if (goal > bestPlayer) {
            bestPlayer = goal;
            nameBestPlayer = command;
            if (goal >= 3) {
                isHatTrick = true;
            }
            if (goal >= 10) {
                break;
            }
        }
        command = input[index];
        index++;
        goal = Number(input[index]);
        index++;
    }
    console.log(`${nameBestPlayer} is the best player!`);
    if (isHatTrick) {
        console.log(`He has scored ${bestPlayer} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestPlayer} goals.`);
    }
}
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])