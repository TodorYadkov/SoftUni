function celsius(input) {
    let tCelsius = Number(input[0]);
    let tFahrenheint = (tCelsius*9)/5 +32;

    console.log(tFahrenheint.toFixed(2));
}
celsius([25])
//T (° F) = 20 ° C × 9/5 + 32 = 68 ° F