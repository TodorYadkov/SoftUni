function radioCrystals(arrayInput) {
    let targetFrequency = arrayInput.shift();
    let currentThickness = arrayInput.shift();

    while (currentThickness != undefined) {

        let cutProcess = cut(targetFrequency, currentThickness);
        let lapProcess = lap(targetFrequency, cutProcess[0]);
        let grindProcess = grind(targetFrequency, lapProcess[0]);
        let etchProcess = etch(targetFrequency, grindProcess[0]);
        let xrayProcess = xray(targetFrequency, etchProcess[0]);

        console.log(`Processing chunk ${currentThickness} microns`);
        if (cutProcess[1] !== 0) console.log(`Cut x${cutProcess[1]}\nTransporting and washing`);
        if (lapProcess[1] !== 0) console.log(`Lap x${lapProcess[1]}\nTransporting and washing`);
        if (grindProcess[1] !== 0) console.log(`Grind x${grindProcess[1]}\nTransporting and washing`);
        if (etchProcess[1] !== 0) console.log(`Etch x${etchProcess[1]}\nTransporting and washing`);
        if (xrayProcess[1] !== 0) console.log(`X-ray x${xrayProcess[1]}`);
        console.log(`Finished crystal ${xrayProcess[0]} microns`);

        currentThickness = arrayInput.shift();
    }

    function cut(targetValue, currentValue) {
        let countCut = 0;
        let newValueArr = [];
        while (targetValue <= currentValue / 4) {
            countCut++;
            currentValue /= 4;
        }
        newValueArr.push(currentValue, countCut);
        return newValueArr;
    }

    function lap(targetValue, currentValue) {
        let countLap = 0;
        let newValueArr = [];
        while (targetValue <= currentValue * 0.80) {
            countLap++;
            currentValue *= 0.80;
        }
        currentValue = washing(currentValue);
        newValueArr.push(currentValue, countLap);
        return newValueArr;
    }

    function grind(targetValue, currentValue) {
        let countGrind = 0;
        let newValueArr = [];
        while (targetValue <= currentValue - 20) {
            countGrind++;
            currentValue -= 20;
        }
        currentValue = washing(currentValue);
        newValueArr.push(currentValue, countGrind);
        return newValueArr;
    }

    function etch(targetValue, currentValue) {
        let countEtch = 0;
        let newValueArr = [];
        if (targetValue % 2 !== 0) {
            targetValue--;
        }
        while (targetValue <= currentValue - 2) {
            countEtch++;
            currentValue -= 2;
        }
        currentValue = washing(currentValue);
        newValueArr.push(currentValue, countEtch);
        return newValueArr;
    }

    function xray(targetValue, currentValue) {
        let newValueArr = [];
        let countXray = 0;
        if (targetValue !== currentValue) {
            currentValue++;
            countXray++;
        }
        newValueArr.push(currentValue, countXray);
        return newValueArr;
    }

    function washing(value) {
        let result = Math.floor(value);
        return result;
    }
}
radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);