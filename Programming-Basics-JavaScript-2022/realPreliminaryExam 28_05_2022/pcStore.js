function pcStore(input) {
    let cpuInDollar = Number(input[0]);
    let videoInDollar = Number(input[1]);
    let ramInDollar = Number(input[2]);
    let numRam = Number(input[3]);
    let discountPercent = Number(input[4]);

    let cpuPriceInLv = cpuInDollar * 1.57;
    let videoPriceInLv = videoInDollar * 1.57;
    let ramPriceInLv = ramInDollar * 1.57;
    discountPercent = (100 - (discountPercent * 100))/100;
    cpuPriceInLv *= discountPercent;
    videoPriceInLv *= discountPercent;
    ramPriceInLv *= numRam;
    let totalSum = cpuPriceInLv + videoPriceInLv + ramPriceInLv;
    console.log(`Money needed - ${totalSum.toFixed(2)} leva.`);
} pcStore(["500","200","80","2","0.05"])