function loadingBar(number) {

    let checkIsFul = isFull(number);
    let progressStatus = loadingStatus(number);

    if (checkIsFul) {
        console.log('100% Complete!\n[%%%%%%%%%%]');
    } else {
        console.log(progressStatus);
    }

    function isFull(number) {
        return number === 100;
    }

    function loadingStatus(number) {
        let result = '';
        let symbolNumber = number / 10;
        let dotNumber = 10 - symbolNumber;
        let dotSymbol = '.';
        let symbolProgress = '%';
        result = `${number}% [${symbolProgress.repeat(symbolNumber)}${dotSymbol.repeat(dotNumber)}]\nStill loading...`;
        return result;
    }
}
loadingBar(50);