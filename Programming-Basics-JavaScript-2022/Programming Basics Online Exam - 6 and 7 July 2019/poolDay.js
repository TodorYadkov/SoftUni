function pool(input) {
    let numPeople = Number(input[0]);
    let taxeEntrance = Number(input[1]);
    let priceChair = Number(input[2]);
    let priceUmbrella = Number(input[3]);
    let sumEntrance = numPeople*taxeEntrance;
    let wantChair = Math.ceil(numPeople*0.75);
    let sumChair = wantChair*priceChair;
    let needUmbrella = Math.ceil(numPeople/2);
    let sumUmbrella = needUmbrella*priceUmbrella;

    let totalValue = (sumEntrance+sumChair+sumUmbrella).toFixed(2);
 
    console.log(`${totalValue} lv.`);
}