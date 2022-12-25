function repaintig(input) {
    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinerPrice = 5.00;
    let bag = 0.40;
    let nylonNeed = Number(input[0])+2;
    let paintNeed = Number(input[1]);
    let thinerNeed = Number(input[2]);
    let workHours = Number(input[3]);
    let paintWithReserv = paintNeed + (paintNeed * 0.1);
    
    let sumNylon = nylonNeed * nylonPrice;
    let sumPaint = paintWithReserv * paintPrice;
    let sumThiner = thinerNeed * thinerPrice;
    let totalSum = sumNylon + sumPaint + sumThiner + bag;
    let sumWorkHour = (totalSum * 0.30) * workHours;

    let sumSpend = totalSum + sumWorkHour;
    console.log(sumSpend);
}
repaintig([10,11,4,8])