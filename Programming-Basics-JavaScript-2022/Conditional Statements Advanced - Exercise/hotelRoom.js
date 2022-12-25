function hotelRoom(input) {
    let months = input[0];
    let numNights = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;
    let costApartment = 0;
    let costStudio = 0;

    if (months == "May" || months == "October") {
        priceApartment = 65.00;
        priceStudio = 50.00;
        if (numNights > 7 && numNights <= 14) {
            costStudio = numNights * priceStudio;
            costStudio *= 0.95;
        } else if (numNights > 14) {
            costStudio = numNights * priceStudio;
            costStudio *= 0.70;
        } else {
            costStudio = numNights * priceStudio;
        }
    } else if (months == "June" || months == "September") {
        priceApartment = 68.70;
        priceStudio = 75.20;
        if (numNights > 14) {
            costStudio = numNights * priceStudio;
            costStudio *= 0.80;
        } else {
            costStudio = numNights * priceStudio;
        }
    } else if (months == "July" || months == "August") {
        priceApartment = 77.00;
        priceStudio = 76.00;
        costStudio = numNights * priceStudio;
    }
    if (numNights > 14) {
        costApartment = numNights * priceApartment;
        costApartment *= 0.90;
    } else {
        costApartment = numNights * priceApartment;
    }
    console.log(`Apartment: ${costApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${costStudio.toFixed(2)} lv.`)
}
hotelRoom(["May",
"15"])

