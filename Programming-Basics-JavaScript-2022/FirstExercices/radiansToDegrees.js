function radians(input) {
   let radians = Number(input[0]);
   let radiansToDegrees = radians*180/Math.PI;
   console.log(radiansToDegrees); 
}
radians([3.1416])