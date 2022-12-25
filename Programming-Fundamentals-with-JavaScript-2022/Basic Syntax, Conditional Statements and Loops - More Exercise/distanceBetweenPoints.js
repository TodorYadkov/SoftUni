function distanceBetweenPoints(x1, y1, x2, y2) {
    let x = Math.pow((x2 - x1),2);
    let y = Math.pow((y2-y1),2);
    let result = Math.sqrt((x+y));
    console.log(result);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)