function footballTournament(input) {
    let index = 0;
    let nameTeam = input[index];
    index++;
    let palyGame = Number(input[index]);
    index++;
    let w = 0;
    let d = 0;
    let l = 0;
    if (palyGame === 0) {
        console.log(`${nameTeam} hasn't played any games during this season.`);
    } else {
        let totalPoint = 0;
        for (let i = 1; i <= palyGame; i++) {
            let matchResult = input[index];
            index++;
            if (matchResult === "W") {
                w++;
                totalPoint += 3;
            } else if (matchResult === "D") {
                d++;
                totalPoint += 1;
            } else if (matchResult === "L") {
                l++;
            }
        }
        let winRate = (w / palyGame) * 100;
        console.log(`${nameTeam} has won ${totalPoint} points during this season`);
        console.log("Total stats:");
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }
}
footballTournament(["Chelsea",
"0"])