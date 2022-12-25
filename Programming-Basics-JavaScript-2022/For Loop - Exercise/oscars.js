function oscars(input) {
    let nameActor = input[0];
    let pointAcademy = Number(input[1]);
    let numberJudge = Number(input[2]);
    let totalPoint = pointAcademy;
    let check = true;
    let countJudgeName = 3;
    let countJudgePoint = 4;

    for (let i = 1; i <= numberJudge; i++) {
        let nameToJudge = 0;
        let pointJudge = 0;
        let temporraryPoint = 0;
        nameToJudge = input[countJudgeName];
        let nameToNumber = Number(nameToJudge.length);
        pointJudge = Number(input[countJudgePoint]);
        countJudgeName += 2;
        countJudgePoint += 2;
        temporraryPoint = (nameToNumber * pointJudge) / 2;
        totalPoint += temporraryPoint;
        if (totalPoint > 1250.5) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${totalPoint.toFixed(1)}!`);
            check = false;
            break;
        }
    }
    if (check) {
        totalPoint = (1250.50 - totalPoint);
        console.log(`Sorry, ${nameActor} you need ${totalPoint.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

