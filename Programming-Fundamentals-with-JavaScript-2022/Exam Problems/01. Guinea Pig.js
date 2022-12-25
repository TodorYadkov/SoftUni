function guineaPig(input) {
    let excessFood = Number(input[0]) * 1000;
    let excessHay = Number(input[1]) * 1000;
    let excessCover = Number(input[2]) * 1000;
    let pigGramms = Number(input[3]) * 1000;
    const everyDayEatFoodGramms = 300;
    let countDays = 0;
    let mothsDays = 30;
    let isEnough = true;

    for (let i = 0; i < mothsDays; i++) {
        let tempQuantity = 0;
        countDays++;
        excessFood -= everyDayEatFoodGramms;
        if (countDays % 2 === 0) {
            tempQuantity = excessFood * 0.05;
            excessHay -= tempQuantity;
        }

        if (countDays % 3 === 0) {
            tempQuantity = pigGramms / 3;
            tempQuantity = Number(tempQuantity.toFixed(2));
            excessCover -= tempQuantity;
        }

        if (excessFood <= 0 || excessHay <= 0 || excessCover <= 0) {
            isEnough = false;
        }
    }

    excessFood /= 1000;
    excessHay /= 1000;
    excessCover /= 1000;
    pigGramms /= 1000;
    
    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`);
    } else {
        console.log(`Merry must go to the pet store!`);
    }
}
guineaPig(["10",
    "5",
    "5.2",
    "1"]);

guineaPig(["1",
    "1.5",
    "3",
    "1.5"]);

guineaPig(["9",
    "5",
    "5.2",
    "1"]);