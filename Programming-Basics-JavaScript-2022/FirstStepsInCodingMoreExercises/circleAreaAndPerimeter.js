function circle(input) {
    let r = Number(input[0]);
    let sCircle = Math.PI * Math.pow(r,2);
    let aCircle = 2 * Math.PI * r;

    console.log(sCircle.toFixed(2));
    console.log(aCircle.toFixed(2));
}
circle([4.5])