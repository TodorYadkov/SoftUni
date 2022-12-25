function basketballTournament(input) {
    let index = 0;
    let command = input[index];
    index++;
    let countWinGames = 0;
    let countLostGame = 0;
    while (command !== "End of tournaments") {
        let tournamentMatch = Number(input[index]);
        index++;
        for (let i = 1; i <= tournamentMatch; i++) {
            let desiTeamPoint = Number(input[index]);
            index++;
            let opponentsTeamPoint = Number(input[index]);
            index++;
            let diffPoint = Math.abs(desiTeamPoint - opponentsTeamPoint);
            if (desiTeamPoint > opponentsTeamPoint) {
                countWinGames++;
                console.log(`Game ${i} of tournament ${command}: win with ${diffPoint} points.`);
            } else {
                countLostGame++;
                console.log(`Game ${i} of tournament ${command}: lost with ${diffPoint} points.`);
            }
        }
        command = input[index];
        index++;
    }
    let totalplayedMatch = countWinGames + countLostGame;
    countWinGames = countWinGames / totalplayedMatch * 100;
    countLostGame = countLostGame / totalplayedMatch * 100;
    console.log(`${countWinGames.toFixed(2)}% matches win`);
    console.log(`${countLostGame.toFixed(2)}% matches lost`);
}
basketballTournament(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"])