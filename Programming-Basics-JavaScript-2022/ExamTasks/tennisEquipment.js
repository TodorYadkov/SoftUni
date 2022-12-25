function tennis(input) {
    let priceTennisRacket = Number(input[0]);
    let numTennisRacket = Number(input[1]);
    let numSneakers = Number(input[2]);
    let priceSneakers = priceTennisRacket / 6;
    
    let sumTennisRacket = numTennisRacket * priceTennisRacket;
    let sumSneakers = numSneakers * priceSneakers;
    let sumDjokovicOther = (sumTennisRacket+sumSneakers) * 0.2;

    let sumTotal = sumTennisRacket + sumSneakers + sumDjokovicOther;
    let payDjokovic = sumTotal / 8;
    let paySponsor = sumTotal * 7 / 8;

    console.log(`Price to be paid by Djokovic ${Math.floor(payDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(paySponsor)}`);

}
tennis([386,7,4])