function barcodeGenerator(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let barcode = "";
    let num1ToString = String(num1);
    let num2ToString = String(num2);
    let num1Position0 = Number(num1ToString[0]);
    let num1Position1 = Number(num1ToString[1]);
    let num1Position2 = Number(num1ToString[2]);
    let num1Position3 = Number(num1ToString[3]);
    let num2Position0 = Number(num2ToString[0]);
    let num2Position1 = Number(num2ToString[1]);
    let num2Position2 = Number(num2ToString[2]);
    let num2Position3 = Number(num2ToString[3]);
    for(let a = num1Position0; a <= num2Position0; a++){
        for(let b = num1Position1; b <= num2Position1; b++){
            for(let c = num1Position2; c <= num2Position2; c++){
                for(let d = num1Position3; d <= num2Position3; d++){
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        barcode += `${a}${b}${c}${d} `
                    }
                }
            }
        }
    }
    console.log(barcode)
}
barcodeGenerator(["2345","6789"])