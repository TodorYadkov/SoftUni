function training(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);
    let coridorDimension = 100;
    let numberPlace = 0;
        h = h*100;
        w = w*100;
    if (h>=300 && w<=10000) {
        w = w - 100;
        w = Math.floor(w / 70);
        h = Math.floor(h / 120);
        numberPlace = h*w-3;
    } else {
        
    }
    console.log(numberPlace.toFixed(0));
}
training([15,8.9])