function tennisRanklist(input) {
    let playTournament = Number(input[0]);
    let initialPoint = Number(input[1]);
    let w = 0;
    let f = 0;
    let sf = 0;
    let countWinGame = 0;
    let totalPoint = 0;

    for (let i = 1; i <= playTournament; i++) {
        i ++;
        let typeFinal = input[i];
        i --;
        if (typeFinal === "W") {
            w += 2000;
            countWinGame ++;
        } else if (typeFinal === "F") {
            f += 1200;
        } else if (typeFinal === "SF") {
            sf += 720;
        }
    }
    totalPoint = initialPoint + w + f + sf;
    console.log(`Final points: ${totalPoint}`);
    console.log(`Average points: ${Math.floor((w + f + sf)/playTournament)}`);
    console.log(`${((countWinGame / playTournament) * 100).toFixed(2)}%`);
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])