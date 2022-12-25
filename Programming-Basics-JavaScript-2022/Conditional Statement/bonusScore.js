function score(input) {
    let startPoint = Number(input[0]);
    let bonuspoint = 0;

    if (startPoint <= 100) {
        bonuspoint = 5;
    } else if (startPoint > 100 && startPoint <= 1000) {
        bonuspoint = startPoint * 0.20;
    } else if (startPoint > 1000) {
        bonuspoint = startPoint * 0.10;
    } 
    if ((startPoint % 2) == 0) {
        bonuspoint += 1;
    } else if ((startPoint % 10) == 5) {
        bonuspoint += 2;
    }
    console.log(bonuspoint);
    console.log(startPoint+bonuspoint);
}
score([15875])