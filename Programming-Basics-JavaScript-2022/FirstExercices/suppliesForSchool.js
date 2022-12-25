function school(input) {
    let pensPrice = 5.80
    let markerPrice = 7.20
    let detergentPrice = 1.20
    let numPens = Number(input[0]);
    let numMarker = Number(input[1]);
    let litterDetergent = Number(input[2]);
    let discount = Number(input[3]);
    let percentDiscount = discount / 100;

    let sumPens = pensPrice * numPens;
    let sumMarker = markerPrice * numMarker;
    let sumDetregent = detergentPrice * litterDetergent;
    let totalSum = sumPens + sumMarker + sumDetregent;
    let totalWithDiscount = totalSum - (totalSum * percentDiscount);

    console.log(totalWithDiscount);

}
school([2,3,4,25])