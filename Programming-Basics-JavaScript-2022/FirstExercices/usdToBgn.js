function convert(input) {
    let usdPrice = 1.79549;
    let usd = Number(input[0]); 
    let totalBgn = usd * usdPrice;
    console.log(totalBgn);
}
convert([22])