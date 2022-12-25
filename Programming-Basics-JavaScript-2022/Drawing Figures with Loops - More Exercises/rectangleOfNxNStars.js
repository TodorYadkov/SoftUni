function rectangleOfNxNStars(input) {
    let n = Number(input[0]);
    let star = "*"
    for (let column = 1; column <= n; column++) {
        let figure = "";
        for (let row = 1; row <= n; row++) {
            figure += star;
        }
        console.log(figure);
    }
}
rectangleOfNxNStars(["2"])