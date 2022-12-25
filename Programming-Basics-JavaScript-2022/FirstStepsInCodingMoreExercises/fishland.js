function fishland(input) {
    let priceSkumriq = Number(input[0]);
    let priceCaca = Number(input[1]);
    let quantityPalamud = Number(input[2]);
    let quantitySafrid = Number(input[3]);
    let quantityMidi = Number(input[4]);
    let pricePalamud = priceSkumriq+priceSkumriq*0.6;
    let priceSafrid = priceCaca+priceCaca*0.8;
    let priceMidi = 7.50;
    
    let sum = (pricePalamud*quantityPalamud)+(priceSafrid*quantitySafrid)+(priceMidi*quantityMidi);
    
    console.log(sum.toFixed(2));
    
}
fishland([7.79,5.35,9.3,0,0])