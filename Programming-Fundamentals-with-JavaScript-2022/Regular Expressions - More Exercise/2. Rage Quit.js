function rageQuit(str) {
    let workStr = str;
    // get character and number
    const pattern = /(?<char>[^\d]+)(?<digit>\d+)/g;
    let regexp = pattern.exec(workStr);
    // create a new set to get only unique elements
    let uniqueSymbols = new Set();
    let result = '';
    // loop to get a character and a number
    while (regexp !== null) {
        // add to set each element
        for (let char of regexp.groups.char) {
            if (Number(regexp.groups.digit) > 0) {
                uniqueSymbols.add(char.toUpperCase());
            }
        }
        // concatenation of each element
        result += regexp.groups.char.repeat(Number(regexp.groups.digit));
        regexp = pattern.exec(workStr);
    }
    // print final result
    console.log(`Unique symbols used: ${uniqueSymbols.size}\n${result.toUpperCase()}`);
}
rageQuit('a2s0');


















/*
function rageQuit(str) {
    let workStr = str;
    // get character and number
    const pattern = /(?<char>[^\d]+)(?<digit>\d+)/g;
    let regexp = pattern.exec(workStr);
    // create array to get only unique elements
    let uniqueSymbols = [];
    let result = '';
    // loop to get a character and a number
    while (regexp !== null) {
        // add unique element
        for (let char of regexp.groups.char) {
           if (!uniqueSymbols.includes(char.toUpperCase()) && Number(regexp.groups.digit) > 0) {
            uniqueSymbols.push(char.toUpperCase());
           }
        }
        // concatenation of each element
        result += regexp.groups.char.repeat(Number(regexp.groups.digit));
        regexp = pattern.exec(workStr);
    }
    // print final result
    console.log(`Unique symbols used: ${uniqueSymbols.length}\n${result.toUpperCase()}`);
}
// rageQuit('a3');
// rageQuit('aSd2&5s@1');
// rageQuit('a3d3r2%2^2#2$2@2a3d3r2%2^2#2$2@2');
// rageQuit('e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15');
rageQuit('a2s0');
*/