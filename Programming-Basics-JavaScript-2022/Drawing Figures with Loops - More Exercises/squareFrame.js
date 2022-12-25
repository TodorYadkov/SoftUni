function squareFrame(input) {
    let n = Number(input[0]);
    let figure = "+";
    for (let first = 1; first <= n - 2; first++) {
        figure += " -";
    }
    figure += " +";
    console.log(figure);
    for (let second = 1; second <= n - 2; second++) {
        figure = "|";
        for (let second1 = 1; second1 <= n - 2; second1++) {
            figure += " -";
        }
        figure += " |";
        console.log(figure);
    }
    figure = "+";
    for (let third = 1; third <= n - 2; third++) {
        figure += " -";
    }
    figure += " +";
    console.log(figure);
}
squareFrame(["4"])