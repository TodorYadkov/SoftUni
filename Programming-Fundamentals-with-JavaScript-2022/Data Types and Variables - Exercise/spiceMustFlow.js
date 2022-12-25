function spiceMustFlow(yield) {
    let totalAmount = 0;
    let workerConsume = 26;
    let dayCount = 0;
    while (yield >= 100) {
        dayCount++;
        totalAmount += (yield - workerConsume);
        yield -=10;
    }
   
    if (totalAmount - workerConsume < 0) {
        totalAmount = 0;
    } else {
        totalAmount -= workerConsume;
    }
    console.log(`${dayCount}\n${totalAmount}`);
}
spiceMustFlow(111);
spiceMustFlow(450);