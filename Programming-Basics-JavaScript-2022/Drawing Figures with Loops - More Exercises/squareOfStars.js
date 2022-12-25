function squareOfStars(input) {
    let n = Number(input[0]);
    let star = "*";
    for (let col = 1; col <= n; col++) {
        let figure = "";
        for (let row = 1; row <= n; row++) {
            figure += star + " ";
        }
        console.log(figure);
    }
}
squareOfStars(["2"])