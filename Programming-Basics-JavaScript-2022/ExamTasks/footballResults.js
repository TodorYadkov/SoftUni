function footbal(input) {
    let scoreOurTeamFirstMatch = Number(String(input[0])[0]);
    let scoreOtherTeamFirsMatch = Number(String(input[0][2]));
    let scoreOurTeamSecondMatch = Number(String(input[1][0]));
    let scoreOtherTeamSecondMatch = Number(String(input[1])[2]);
    let scoreOurTeamThirdMatch =  Number(String(input[2])[0]);
    let scoreOtherTeamThirdMatch = Number(String(input[2])[2]);
    
    let winGame = 0;
    let lostGame = 0;
    let drawnGame = 0;
    
    if (scoreOurTeamFirstMatch > scoreOtherTeamFirsMatch) {
        winGame = winGame + 1;
    } else if (scoreOurTeamFirstMatch < scoreOtherTeamFirsMatch) {
        lostGame = lostGame + 1;
    } else {
        drawnGame = drawnGame + 1;
    }

    if (scoreOurTeamSecondMatch > scoreOtherTeamSecondMatch) {
        winGame = winGame + 1;
    } else if (scoreOurTeamSecondMatch < scoreOtherTeamSecondMatch) {
        lostGame = lostGame + 1;
    } else {
        drawnGame = drawnGame + 1;
    }

    if (scoreOurTeamThirdMatch > scoreOtherTeamThirdMatch) {
        winGame = winGame + 1;
    } else if (scoreOurTeamThirdMatch < scoreOtherTeamThirdMatch) {
        lostGame = lostGame + 1;
    } else {
        drawnGame = drawnGame + 1;
    }

  console.log(`Team won ${winGame} games.`);
  console.log(`Team lost ${lostGame} games.`);
  console.log(`Drawn games: ${drawnGame}`);
}
footbal(["4:2","0:3","1:0"])