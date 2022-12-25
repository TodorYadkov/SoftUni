function ball(input) {
    let index = 0;
    let numBalls = Number(input[index++]);
    let ball = input[index++];
    let points = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let other = 0;
    let blackCountDivide = 0;
    for (let i = 1; i <= numBalls; i++) {
        if (ball === "red") {
            points += 5;
            red++;
        } else if (ball === "orange") {
            points += 10;
            orange++;
        } else if (ball === "yellow") {
            points += 15;
            yellow++;
        } else if (ball === "white") {
            points += 20;
            white++;
        } else if (ball === "black") {
            blackCountDivide++;
            points = Math.floor(points / 2);
        } else {
            other++;
        }
        ball = input[index++];
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${blackCountDivide}`);
}
ball(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])