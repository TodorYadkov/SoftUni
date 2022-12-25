function rectangleOf10x10Stars(input) {
    let star = "*";
    for (let column = 1;column <= 10; column++) {
        let figure = "";
        for (let row = 1;row <= 10; row++) {
         figure += star;   
        }
        console.log(figure);
    }
}
rectangleOf10x10Stars()