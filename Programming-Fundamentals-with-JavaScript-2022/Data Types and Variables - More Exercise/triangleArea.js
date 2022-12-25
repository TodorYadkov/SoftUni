function triangleArea(n1,n2,n3) {
    let s = (n1 + n2 + n3) / 2;
    let area = Math.sqrt(s * (s - n1) * (s - n2) * (s - n3));
    console.log(area);
}
triangleArea(3,5.5,4);