function santaCookies(inputArr) {
    const batches = inputArr.shift();
    let totalCokiesBox = 0;
    const unit = {
        singleCookieGrams: 25,
        cup: 140,
        smallSpoon: 10,
        bigSpoon: 20,
        cookiesPerBox: 5,
    };

    for (let i = 0; i < batches; i++) {
        let flourInGrams = inputArr.shift();
        let sugarInGrams = inputArr.shift();
        let cocoaInGrams = inputArr.shift();
        let currentCookiesBox = 0;
        let cookiesPerBake = 0;

        let flourCups = Math.floor(flourInGrams / unit.cup);
        let sugarSpoons = Math.floor(sugarInGrams / unit.bigSpoon);
        let cocoaSpoons = Math.floor(cocoaInGrams / unit.smallSpoon);

        if (flourCups <= 0 || sugarSpoons <= 0 || cocoaSpoons <= 0) {
            console.log('Ingredients are not enough for a box of cookies.');

        } else {
            cookiesPerBake = Math.floor((unit.cup + unit.smallSpoon + unit.bigSpoon) * Math.min(flourCups, sugarSpoons, cocoaSpoons) / unit.singleCookieGrams);
            currentCookiesBox = Math.floor(cookiesPerBake / unit.cookiesPerBox);
            totalCokiesBox += currentCookiesBox;
            console.log(`Boxes of cookies: ${currentCookiesBox}`);
        }
    }
    
    console.log(`Total boxes: ${totalCokiesBox}`);
}

santaCookies([2, 200, 300, 500, 100, 200, 50]);
santaCookies([1, 1400, 200, 100,]);