function fish(input) {
    let waterLiter = 0.001;
    let lenghtCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let volumeFishTank = lenghtCm * widthCm * heightCm;
    let volumeWater = volumeFishTank * waterLiter;
    let result = volumeWater * (1-percent);

    console.log(result);
}
fish([85,75,47,17])