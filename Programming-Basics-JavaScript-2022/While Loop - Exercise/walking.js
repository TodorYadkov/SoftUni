function walking(input) {
    let stepNumber = Number(input[0]);
    let indexStep = 0;
    let indexGoingHome = 0;
    let end = true;
    let targetSteps = 10000;
    let takenSteps = 0;
    while (end) {
        let goingHome = input[indexGoingHome];
        stepNumber = Number(input[indexStep]);
        if (goingHome === "Going home") {
            indexStep++;
            stepNumber = Number(input[indexStep]);
            takenSteps += stepNumber;
            if (takenSteps >= targetSteps) {
                console.log("Goal reached! Good job!");
                console.log(`${takenSteps - targetSteps} steps over the goal!`);
                end = false;
                break;
            } else {
                console.log(`${targetSteps - takenSteps} more steps to reach goal.`);
                end = false;
                break;
            }
        }
        takenSteps += stepNumber;
        if (takenSteps >= targetSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${takenSteps - targetSteps} steps over the goal!`);
            end = false;
            break;
        } else {
            indexGoingHome++;
            indexStep++;
        }
    }
}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])