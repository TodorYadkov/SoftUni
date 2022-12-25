function cinema(input) {
    let cinemaType = input[0];
    let numRow = Number(input[1]);
    let numColumn = Number(input[2]);
    let numChair = numRow * numColumn;
    let income = 0;
    switch (cinemaType) {
        case "Premiere":
            income = numChair * 12;
        break;
        case "Normal":
            income = numChair * 7.5;
        break;
        case "Discount":
            income = numChair * 5;
        break;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"])


